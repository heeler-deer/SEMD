<template>
  <div class="header">
    <!-- 头部 -->
    <div class="header-left">
      <!-- home -->
      <div class="header-left-home" title="返回首页" @click="toBack">
        <i class="iconfont icon-shouye1" style="color: var(--main-color)"></i>
      </div>

      <!-- 文档标题 -->
      <div class="header-left-filename" :title="filename">{{ filename }}</div>

      <!-- 收藏按钮 -->
      <div class="header-left-favor" @click="favorClick" title="收藏">
        <i class="iconfont icon-shoucang" v-if="!favor"></i>
        <i class="iconfont icon-shoucang1" v-else></i>
      </div>

      <!-- 最新编辑人员 -->
      <div class="header-left-news">
        <i class="iconfont icon-oko"></i>
        <span>
          Latest Revision:
          <span class="newUserName">{{ newUser }}</span>
        </span>
      </div>
    </div>

    

    <div class="header-right">
      <!-- 正在查看的人员列表 -->
      <div class="header-right-userlist" title="正在编辑的人">
        <userListVue :userList="socketuserlist" @command="commandhandleuser" />
      </div>

      <!-- markdown -->
      <div class="header-right-markdown" title="切换模式">
        <i class="iconfont icon-markdown1"></i>
      </div>

      <!-- 历史 -->
      <div class="header-right-history" title="历史记录" @click="historyClick">
        <div class="icon-container">
          <i class="iconfont icon-lishi"></i>
        </div>
      </div>
      <div v-if="showHistory" class="history-list">
        <historyVue :versionList="sockethistorylist" @command="commandhandlehistory"/>
      </div>
      <!-- 消息：打开抽屉实现 -->
      <div class="header-right-setting" title="消息" @click="open">
        <el-badge :value="unread || ''" class="item">
          <i class="iconfont icon-xiaoxizhongxin"></i>
        </el-badge>
      </div>

      <!-- 分享 -->
      <div class="header-right-shear" title="分享">
        <el-button type="primary" size="small" @click="share">Share</el-button>
      </div>

      <!-- 我的头像 -->
      <div class="header-right-userimg" title="我的信息">
        <div class="userimg_svg" v-if="userinfo.usersvg" v-html="userinfo.usersvg" />
        <el-avatar v-else shape="square" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import userListVue from "./userList.vue";
import historyVue from "./history.vue";
import { execcontent } from "@/util/execcontent";
import { createShearUrl } from "@/util/share";
import { getFilesByFileId_API, getHistryoByFielId_API, getHistryoByVId_API } from "@/api/file";

import router from "@/router";
import store from "@/store";

const emit = defineEmits(["open"]);
const open = () => emit("open");
// 解析 websocket provider

let { socketuserlist, unread } = defineProps({
  socketuserlist: {
    type: Array,
  },
  unread: { type: Number, default: 0 },
});
const sockethistorylist = ref([]); // 历史记录数据
// 当前编辑的文件名称
let filename = ref("");
let userinfo = reactive({
  usersvg: "",
  userimg: "",
  username: "",
});


const favor = ref(false);
const editType = ref("markdown"); // 标记编辑器类型 text 或者 markdown

// 点击选项回调
const commandhandleuser = (command) => {
  // console.log("点击了", command);
};
const commandhandlehistory = (command) => {
  console.log("点击了history", command);
}
async function share() {
  // 创建分享链接
  // 获取当前文件的信息  username, fileid, filename
  let { username, userid } = JSON.parse(sessionStorage.getItem("user"));
  let fileid = window.location.hash.split("edit/")[1]; // 当前文件的fileid
  // 通过fileid 请求文件信息
  let { data } = await getFilesByFileId_API({ userid, fileid });
  let { filename, filesuffix } = data;
  let url = createShearUrl(username, fileid, filename + "." + filesuffix);
  execcontent(url);
  ElMessage.success("分享链接已复制到粘贴板");
}

// 收藏点击
const favorClick = () => {
  favor.value = !favor.value;
  if (favor.value) ElMessage.success("已收藏");
  else ElMessage.success("已取消");
};

const showHistory = ref(false); // 控制历史记录的显示

const historyClick = async (event) => {
  showHistory.value = !showHistory.value; // 切换历史记录的显示状态
  event.stopPropagation(); // 阻止事件冒泡

  let fileid = new URLSearchParams(window.location.search).get('fileid');
  
  if (!fileid) {
    fileid = window.location.hash.split('/edit/')[1]?.split('?')[0];
  }
  //console.log("fileid",fileid)
  try {
    const { data } = await getHistryoByFielId_API({ fileid });
    //console.log("data",data);
    const dataArray = Object.keys(data).map((key) => data[key]);
    console.log("Version history (array format)", dataArray);
    sockethistorylist.value = dataArray; // Vue 响应式更新
  } catch (error) {
    console.error("Failed to fetch version history:", error);
  }
};

/* const vid = ref("");
const updateVid = (newVid) =>{
  vid.value = newVid;
}
// 监听 vid 的变化
watch(vid, async (newVid) => {
  if (newVid) {
    const { data } = await getHistryoByVId_API(newVid); // 调用 API 获取文件信息
  }
}); */

// 返回首页
const toBack = () => {
  // 实现关闭 websocket
  store.state.WebsocketProvider.disconnect();
  store.commit("setWebsocketProvider", null);
  router.push("/home/pages");
};

let newUser = null
onMounted(async () => {
  // 请求文件
  let { username, userid } = JSON.parse(sessionStorage.getItem("user"));
  newUser = username;
  let fileid = new URLSearchParams(window.location.search).get('fileid');
  if (!fileid) {
    fileid = window.location.hash.split('/edit/')[1]?.split('?')[0];
  }
  // 通过fileid 请求文件信息
  let { data } = await getFilesByFileId_API({ userid, fileid });

  filename.value = `${data.filename}.${data.suffix || data.filesuffix}`;

  let { userimg } = JSON.parse(sessionStorage.getItem("user"));
  userimg.toString().includes("<svg")
    ? (userinfo.usersvg = userimg)
    : (userinfo.userimg = userimg);

  // 初始化socket服务
});
</script>

<style lang="less" scoped>
.header {
  height: 50px;
  display: flex;
  //align-items: center;
  align-items: flex-start;
  padding: 15px 0px 0px 0px;
  justify-content: space-between;

  // border: solid red 1px;
  &>div {
    display: flex;
    //align-items: center;
    align-items: flex-start;
  }

  &-left {
    &-home {
      cursor: pointer;
    }

    &>div {
      margin: 0 5px;
    }

    &-filename {
      font-weight: 700;
      width: auto;
      max-width: 160px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &-favor {
      cursor: pointer;
    }

    &-news {
      &>span {
        font-size: 12px;
        color: #ccc;
      }

      .newUserName {
        font-style: italic;
        margin: 0 2px;
        cursor: pointer;

        &:hover {
          border-bottom: solid var(--main-color) 1px;
        }
      }
    }
  }

  &-right {
    &>div {
      margin: 0 10px;
      cursor: pointer;
    }

    &-userlist {
      display: flex;
      align-items: center;
      //align-items: flex-start; /* 修改为 flex-start 以实现顶端对齐 */
      // border-right: solid var(--main-color) 1px;
    }

    &-historylist {
      display: flex;
      align-items: center;
      //align-items: flex-start; /* 修改为 flex-start 以实现顶端对齐 */
      // border-right: solid var(--main-color) 1px;
    }

    &-userimg {
      /deep/.el-avatar {
        cursor: pointer;
        height: 25px;
        width: 25px;
        background-color: transparent;
      }
    }
  }
}

.header-right-history {
    display: flex;
    flex-direction: column; 
    align-items: center; 
    //align-items: flex-start; 
}

.icon-container {
    display: flex;
    align-items: center; 
    //align-items: flex-start; 
}

.iconfont {
    font-size: 24px; 
    align-items: center;
    
}

.history-list {
  align-items: center;
  margin-top: 5px; 
} 

</style>
