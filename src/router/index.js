import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aboutIntroduction',
    name: 'aboutIntroduction',
    component: () => import('../views/about/AboutIntroduction.vue')
  },
  {
    path: '/aboutTeam',
    name: 'aboutTeam',
    component: () => import('../views/about/AboutTeam.vue')
  },
  {
    path: '/aboutAuthentication',
    name: 'authentication',
    component: () => import('../views/about/AboutAuthentication.vue')
  },
  {
    path: '/aboutMap',
    name: 'aboutMap',
    component: () => import('../views/about/AboutMap.vue')
  },
  {
    path: '/aboutRecruit',
    name: 'aboutRecruit',
    component: () => import('../views/about/AboutRecruit.vue')
  },
  {
    path: '/copyright',
    name: 'copyright',
    component: () => import('../views/CopyrightView.vue')
  },
  // 資安法專區
  {
    path: '/serveMoc',
    name: 'serveMoc',
    component: () => import('../views/serves/ServeMocView.vue')
  },
  {
    path: '/serveHeis',
    name: 'serveHeis',
    component: () => import('../views/serves/ServeHeisView.vue')
  },
  {
    path: '/serveSrmas',
    name: 'serveSrmas',
    component: () => import('../views/serves/ServeSrmasView.vue')
  },
  {
    path: '/serveSivas',
    name: 'serveSivas',
    component: () => import('../views/serves/ServeSivasView.vue')
  },
  {
    path: '/serveLucas',
    name: 'serveLucas',
    component: () => import('../views/serves/ServeLucasView.vue')
  },
  {
    path: '/serveSesc',
    name: 'serveSesc',
    component: () => import('../views/serves/ServeSescView.vue')
  },
  {
    path: '/serveSoc',
    name: 'serveSoc',
    component: () => import('../views/serves/ServeSocView.vue')
  },
  {
    path: '/serveGcb',
    name: 'serveGcb',
    component: () => import('../views/serves/ServeGcbView.vue')
  },
  {
    path: '/serveCodeDetect',
    name: 'serveCodeDetect',
    component: () => import('../views/serves/ServeCodeDetectView.vue')
  },
  {
    path: '/serveAppCheck',
    name: 'serveAppCheck',
    component: () => import('../views/serves/serveAppCheckView.vue')
  },
  {
    path: '/serveCse',
    name: 'serveCse',
    component: () => import('../views/serves/serveCseView.vue')
  },
  // 共同供應契約
  {
    path: '/contractLists',
    name: 'contractLists',
    component: () => import('../views/contract/ContractLists.vue')
  },
  {
    path: '/contractContent/:contractId',
    name: 'contractContent',
    component: () => import('../views/contract/ContractContentView.vue'),
    props: (route) => {
      return {
        id: route.params.contractId
      }
    }
  },
  // 代理產品
  {
    path: '/representHome',
    name: 'representHome',
    component: () => import('../views/represent/representHome.vue')
  },
  {
    path: '/cellopoint',
    name: 'cellopoint',
    component: () => import('../views/represent/representCellopoint.vue')
  },
  // represent eLock
  {
    path: '/eLock',
    name: 'eLock',
    component: () => import('../views/represent/representELock.vue')
  },
  {
    path: '/delinea',
    name: 'delinea',
    component: () => import('../views/represent/representDelinea.vue')
  },
  {
    path: '/illumio',
    name: 'illumio',
    component: () => import('../views/represent/representIllumio.vue')
  },
  {
    path: '/invicti',
    name: 'invicti',
    component: () => import('../views/represent/representInvicti.vue')
  },
  {
    path: '/entrust',
    name: 'entrust',
    component: () => import('../views/represent/representEntrust.vue')
  },
  {
    path: '/entrustContent01',
    name: 'entrustContent01',
    component: () => import('../views/represent/entrust/representEntrustContent01.vue')
  },
  {
    path: '/entrustContent02',
    name: 'entrustContent02',
    component: () => import('../views/represent/entrust/representEntrustContent02.vue')
  },
  {
    path: '/entrustContent03',
    name: 'entrustContent03',
    component: () => import('../views/represent/entrust/representEntrustContent03.vue')
  },
  {
    path: '/entrustContent04',
    name: 'entrustContent04',
    component: () => import('../views/represent/entrust/representEntrustContent04.vue')
  },
  {
    path: '/opswat',
    name: 'opswat',
    component: () => import('../views/represent/representOpswat.vue')
  },
  {
    path: '/neithnet',
    name: 'neithnet',
    component: () => import('../views/represent/representNeithnet.vue')
  },
  {
    path: '/Rapid7',
    name: 'Rapid7',
    component: () => import('../views/represent/representRapid7.vue')
  },
  {
    path: '/representRapid7Content01',
    name: 'representRapid7Content01',
    component: () => import('../views/represent/rapid7/representRapid7Content01.vue')
  },
  {
    path: '/representRapid7Content02',
    name: 'representRapid7Content02',
    component: () => import('../views/represent/rapid7/representRapid7Content02.vue')
  },
  {
    path: '/representRapid7Content03',
    name: 'representRapid7Content03',
    component: () => import('../views/represent/rapid7/representRapid7Content03.vue')
  },
  {
    path: '/representRapid7Content04',
    name: 'representRapid7Content04',
    component: () => import('../views/represent/rapid7/representRapid7Content04.vue')
  },
  {
    path: '/representRapid7Content05',
    name: 'representRapid7Content05',
    component: () => import('../views/represent/rapid7/representRapid7Content05.vue')
  },
  {
    path: '/representRapid7Content06',
    name: 'representRapid7Content06',
    component: () => import('../views/represent/rapid7/representRapid7Content06.vue')
  },
  {
    path: '/skyhigh',
    name: 'skyhigh',
    component: () => import('../views/represent/representSkyhigh.vue')
  },
  {
    path: '/SecurityScorecard',
    name: 'SecurityScorecard',
    component: () => import('../views/represent/representSecurityScorecard.vue')
  },
  {
    path: '/tufin',
    name: 'tufin',
    component: () => import('../views/represent/representTufin.vue')
  },
  {
    path: '/claroty',
    name: 'claroty',
    component: () => import('../views/represent/representClaroty.vue')
  },
  // claroty content
  {
    path: '/clarotyContent01',
    name: 'clarotyContent01',
    component: () => import('../views/represent/claroty/representClarotyContent01.vue')
  },
  {
    path: '/clarotyContent02',
    name: 'clarotyContent02',
    component: () => import('../views/represent/claroty/representClarotyContent02.vue')
  },
  // 最新消息
  {
    path: '/casesLists',
    name: 'casesLists',
    component: () => import('../views/news/CasesLists.vue')
  },
  {
    path: '/casesContent/:casesId',
    name: 'casesContent',
    component: () => import('../views/news/CasesContentView.vue')
  },
  {
    path: '/newsLists',
    name: 'newsLists',
    component: () => import('../views/news/NewsLists.vue')
  },
  {
    path: '/newsContent/:newsId',
    name: 'newsContent',
    component: () => import('../views/news/NewsContentView.vue')
  },
  {
    path: '/videoList',
    name: 'videoList',
    component: () => import('../views/news/VideoList.vue')
  },
  {
    path: '/videoContent/:videoId',
    name: 'videoContent',
    component: () => import('../views/news/VideoContentView.vue')
  },
  {
    path: '/eventsLists',
    name: 'eventsLists',
    component: () => import('../views/news/EventsLists.vue')
  },
  {
    path: '/eventsContent/:eventsId',
    name: 'eventsContent',
    component: () => import('../views/news/EventsContentView.vue')
  },
  {
    path: '/statementsLists',
    name: 'statementsLists',
    component: () => import('../views/news/StatementsLists.vue')
  },
  {
    path: '/statementsSuccess',
    name: 'statementsSuccess',
    component: () => import('../views/news/StatementsSuccess.vue')
  },
  {
    path: '/statementsContent/:statementsId',
    name: 'statementsContent',
    component: () => import('../views/news/StatementsContentView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/contactSuccess',
    name: 'contactSuccess',
    component: () => import('../views/ContactSuccess.vue')
  },
  // 404 頁面
  { path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: () => import('../views/404View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
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

export default router
