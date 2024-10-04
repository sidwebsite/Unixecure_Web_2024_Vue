import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const companyName = 'uniXecure智慧資安科技'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: companyName
    }
  },
  {
    path: '/aboutIntroduction',
    name: 'aboutIntroduction',
    component: () => import('../views/about/AboutIntroduction.vue'),
    meta: {
      title: `關於我們-公司簡介 | ${companyName}`
    },
  },
  {
    path: '/aboutTeam',
    name: 'aboutTeam',
    component: () => import('../views/about/AboutTeam.vue'),
    meta: {
      title: `關於我們-經營團隊 | ${companyName}`
    }
  },
  {
    path: '/aboutAuthentication',
    name: 'authentication',
    component: () => import('../views/about/AboutAuthentication.vue'),
    meta: {
      title: `關於我們-專業認證 | ${companyName}`
    }
  },
  {
    path: '/aboutMap',
    name: 'aboutMap',
    component: () => import('../views/about/AboutMap.vue'),
    meta: {
      title: `關於我們-營業據點 | ${companyName}`
    }
  },
  {
    path: '/aboutRecruit',
    name: 'aboutRecruit',
    component: () => import('../views/about/AboutRecruit.vue'),
    meta: {
      title: `關於我們-人才招募 | ${companyName}`
    }
  },
  // 著作權及隱私權聲明
  {
    path: '/copyright',
    name: 'copyright',
    component: () => import('../views/CopyrightView.vue'),
    meta: {
      title: `著作權及隱私權聲明 | ${companyName}`
    }
  },
  // 資安法專區
  {
    path: '/serveMoc',
    name: 'serveMoc',
    component: () => import('../views/serves/ServeMocView.vue'),
    meta: {
      title: `資安監控維運服務 MOC | ${companyName}`
    }
  },
  {
    path: '/serveHeis',
    name: 'serveHeis',
    component: () => import('../views/serves/ServeHeisView.vue'),
    meta: {
      title: `社交工程演練 HEIS | ${companyName}`
    }
  },
  {
    path: '/serveSrmas',
    name: 'serveSrmas',
    component: () => import('../views/serves/ServeSrmasView.vue'),
    meta: {
      title: `系統資源監測 SRMAS | ${companyName}`
    }
  },
  {
    path: '/serveSivas',
    name: 'serveSivas',
    component: () => import('../views/serves/ServeSivasView.vue'),
    meta: {
      title: `資通安全弱點通報 SIVAS | ${companyName}`
    }
  },
  {
    path: '/serveLucas',
    name: 'serveLucas',
    component: () => import('../views/serves/ServeLucasView.vue'),
    meta: {
      title: `日誌管理系統 LUCAS | ${companyName}`
    }
  },
  {
    path: '/serveSesc',
    name: 'serveSesc',
    component: () => import('../views/serves/ServeSescView.vue'),
    meta: {
      title: `電子郵件過濾 SESC | ${companyName}`
    }
  },
  {
    path: '/serveSoc',
    name: 'serveSoc',
    component: () => import('../views/serves/ServeSocView.vue'),
    meta: {
      title: `資通安全威脅偵測管理 SOC | ${companyName}`
    }
  },
  {
    path: '/serveGcb',
    name: 'serveGcb',
    component: () => import('../views/serves/ServeGcbView.vue'),
    meta: {
      title: `政府組態基準 GCB | ${companyName}`
    }
  },
  {
    path: '/serveCodeDetect',
    name: 'serveCodeDetect',
    component: () => import('../views/serves/ServeCodeDetectView.vue'),
    meta: {
      title: `原始碼檢測 | ${companyName}`
    }
  },
  {
    path: '/serveAppCheck',
    name: 'serveAppCheck',
    component: () => import('../views/serves/serveAppCheckView.vue'),
    meta: {
      title: `APP 資安檢測 | ${companyName}`
    }
  },
  {
    path: '/serveCse',
    name: 'serveCse',
    component: () => import('../views/serves/serveCseView.vue'),
    meta: {
      title: `資通安全健檢 | ${companyName}`
    }
  },
  // 共同供應契約
  {
    path: '/contractLists',
    name: 'contractLists',
    component: () => import('../views/contract/ContractLists.vue'),
    meta: {
      title: `共同供應契約 | ${companyName}`
    }
  },
  {
    path: '/contractContent/:contractId',
    name: 'contractContent',
    component: () => import('../views/contract/ContractContentView.vue'),
    props: (route) => {
      return {
        id: route.params.contractId
      }
    },
    meta: {
      title: `共同供應契約 | ${companyName}`
    }
  },
  // 代理產品
  {
    path: '/representHome',
    name: 'representHome',
    component: () => import('../views/represent/representHome.vue'),
    meta: {
      title: `代理產品 | ${companyName}`
    }
  },
  {
    path: '/cellopoint',
    name: 'cellopoint',
    component: () => import('../views/represent/representCellopoint.vue'),
    meta: {
      title: `代理產品-cellopoint | ${companyName}`
    }
  },
  // represent eLock
  {
    path: '/eLock',
    name: 'eLock',
    component: () => import('../views/represent/representELock.vue'),
    meta: {
      title: `代理產品-eLock | ${companyName}`
    }
  },
  {
    path: '/delinea',
    name: 'delinea',
    component: () => import('../views/represent/representDelinea.vue'),
    meta: {
      title: `代理產品-Delinea | ${companyName}`
    }
  },
  {
    path: '/illumio',
    name: 'illumio',
    component: () => import('../views/represent/representIllumio.vue'),
    meta: {
      title: `代理產品-illumio | ${companyName}`
    }
  },
  {
    path: '/invicti',
    name: 'invicti',
    component: () => import('../views/represent/representInvicti.vue'),
    meta: {
      title: `代理產品-Invicti | ${companyName}`
    }
  },
  {
    path: '/entrust',
    name: 'entrust',
    component: () => import('../views/represent/representEntrust.vue'),
    meta: {
      title: `代理產品-ENTRUST | ${companyName}`
    }
  },
  {
    path: '/entrustContent01',
    name: 'entrustContent01',
    component: () => import('../views/represent/entrust/representEntrustContent01.vue'),
    meta: {
      title: `代理產品-ENTRUST | ${companyName}`
    }
  },
  {
    path: '/entrustContent02',
    name: 'entrustContent02',
    component: () => import('../views/represent/entrust/representEntrustContent02.vue'),
    meta: {
      title: `代理產品-ENTRUST | ${companyName}`
    }
  },
  {
    path: '/entrustContent03',
    name: 'entrustContent03',
    component: () => import('../views/represent/entrust/representEntrustContent03.vue'),
    meta: {
      title: `代理產品-ENTRUST | ${companyName}`
    }
  },
  {
    path: '/entrustContent04',
    name: 'entrustContent04',
    component: () => import('../views/represent/entrust/representEntrustContent04.vue'),
    meta: {
      title: `代理產品-ENTRUST | ${companyName}`
    }
  },
  {
    path: '/opswat',
    name: 'opswat',
    component: () => import('../views/represent/representOpswat.vue'),
    meta: {
      title: `代理產品-OPSWAT | ${companyName}`
    }
  },
  {
    path: '/neithnet',
    name: 'neithnet',
    component: () => import('../views/represent/representNeithnet.vue'),
    meta: {
      title: `代理產品-NEITHNET | ${companyName}`
    }
  },
  {
    path: '/Rapid7',
    name: 'Rapid7',
    component: () => import('../views/represent/representRapid7.vue'),
    meta: {
      title: `代理產品-RAPID7 | ${companyName}`
    }
  },
  {
    path: '/Rapid7Content01',
    name: 'Rapid7Content01',
    component: () => import('../views/represent/rapid7/representRapid7Content01.vue'),
    meta: {
      title: `代理產品-RAPID7 | ${companyName}`
    }
  },
  {
    path: '/Rapid7Content02',
    name: 'Rapid7Content02',
    component: () => import('../views/represent/rapid7/representRapid7Content02.vue'),
    meta: {
      title: `代理產品-RAPID7 | ${companyName}`
    }
  },
  {
    path: '/Rapid7Content03',
    name: 'Rapid7Content03',
    component: () => import('../views/represent/rapid7/representRapid7Content03.vue'),
    meta: {
      title: `代理產品-RAPID7 | ${companyName}`
    }
  },
  {
    path: '/Rapid7Content04',
    name: 'Rapid7Content04',
    component: () => import('../views/represent/rapid7/representRapid7Content04.vue'),
    meta: {
      title: `代理產品-RAPID7 | ${companyName}`
    }
  },
  {
    path: '/Rapid7Content05',
    name: 'Rapid7Content05',
    component: () => import('../views/represent/rapid7/representRapid7Content05.vue'),
    meta: {
      title: `代理產品-RAPID7 | ${companyName}`
    }
  },
  {
    path: '/Rapid7Content06',
    name: 'Rapid7Content06',
    component: () => import('../views/represent/rapid7/representRapid7Content06.vue'),
    meta: {
      title: `代理產品-RAPID7 | ${companyName}`
    }
  },
  // {
  //   path: '/skyhigh',
  //   name: 'skyhigh',
  //   component: () => import('../views/represent/representSkyhigh.vue')
  // },
  // {
  //   path: '/SecurityScorecard',
  //   name: 'SecurityScorecard',
  //   component: () => import('../views/represent/representSecurityScorecard.vue')
  // },
  {
    path: '/tufin',
    name: 'tufin',
    component: () => import('../views/represent/representTufin.vue'),
    meta: {
      title: `代理產品-tufin | ${companyName}`
    }
  },
  {
    path: '/claroty',
    name: 'claroty',
    component: () => import('../views/represent/representClaroty.vue'),
    meta: {
      title: `代理產品-claroty | ${companyName}`
    }
  },
  // claroty content
  {
    path: '/clarotyContent01',
    name: 'clarotyContent01',
    component: () => import('../views/represent/claroty/representClarotyContent01.vue'),
    meta: {
      title: `代理產品-claroty | ${companyName}`
    }
  },
  {
    path: '/clarotyContent02',
    name: 'clarotyContent02',
    component: () => import('../views/represent/claroty/representClarotyContent02.vue'),
    meta: {
      title: `代理產品-claroty | ${companyName}`
    }
  },
  // 最新消息
  {
    path: '/casesLists',
    name: 'casesLists',
    component: () => import('../views/news/CasesLists.vue'),
    meta: {
      title: `最新消息-成功案例 | ${companyName}`
    }
  },
  {
    path: '/casesContent/:casesId',
    name: 'casesContent',
    component: () => import('../views/news/CasesContentView.vue'),
    meta: {
      title: `最新消息-成功案例 | ${companyName}`
    }
  },
  {
    path: '/newsLists',
    name: 'newsLists',
    component: () => import('../views/news/NewsLists.vue'),
    meta: {
      title: `最新消息-新聞中心 | ${companyName}`
    }
  },
  {
    path: '/newsContent/:newsId',
    name: 'newsContent',
    component: () => import('../views/news/NewsContentView.vue'),
    meta: {
      title: `最新消息-新聞中心 | ${companyName}`
    }
  },
  {
    path: '/videoList',
    name: 'videoList',
    component: () => import('../views/news/VideoList.vue'),
    meta: {
      title: `最新消息-影音專區 | ${companyName}`
    }
  },
  {
    path: '/videoContent/:videoId',
    name: 'videoContent',
    component: () => import('../views/news/VideoContentView.vue'),
    meta: {
      title: `最新消息-影音專區 | ${companyName}`
    }
  },
  {
    path: '/eventsLists',
    name: 'eventsLists',
    component: () => import('../views/news/EventsLists.vue'),
    meta: {
      title: `最新消息-行銷活動 | ${companyName}`
    }
  },
  {
    path: '/eventsContent/:eventsId',
    name: 'eventsContent',
    component: () => import('../views/news/EventsContentView.vue'),
    meta: {
      title: `最新消息-行銷活動 | ${companyName}`
    }
  },
  {
    path: '/statementsLists',
    name: 'statementsLists',
    component: () => import('../views/news/StatementsLists.vue'),
    meta: {
      title: `最新消息-報告書專區 | ${companyName}`
    }
  },
  {
    path: '/statementsSuccess',
    name: 'statementsSuccess',
    component: () => import('../views/news/StatementsSuccess.vue'),
    meta: {
      title: `最新消息-報告書專區 | ${companyName}`
    }
  },
  {
    path: '/statementsContent/:statementsId',
    name: 'statementsContent',
    component: () => import('../views/news/StatementsContentView.vue'),
    meta: {
      title: `最新消息-報告書專區 | ${companyName}`
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: `最新消息-聯繫我們 | ${companyName}`
    }
  },
  {
    path: '/contactSuccess',
    name: 'contactSuccess',
    component: () => import('../views/ContactSuccess.vue'),
    meta: {
      title: `最新消息-聯繫我們 | ${companyName}`
    }
  },
  // 404 頁面
  { path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: () => import('../views/404View.vue'),
    meta: {
      title: '404 錯誤'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth', 
        };
      }
      return { top: 0 };
    }
  }
})
// meta config
router.beforeEach((to, from, next) => {
  // Update document title
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router
