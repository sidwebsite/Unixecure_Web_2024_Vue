<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="bg-gray-50 overflow-hidden">
        <div class="container position-relative">
            <!-- background images start -->
            <span class="aboutUs_bg">
                <img src="../../assets/images/aboutUs/aboutUs_title_bg.svg" alt="">
            </span>
            <!-- background images end -->
            <h1 class="page-title text-white">關於智慧資安科技</h1>
        </div>
        <div class="mw-760 pt-9">
            <h3 class="text-center mb-6">資通安全服務暨代理領導廠商</h3>
            <p class="text-center mb-6">智慧資安科技（uniXecure）企業宗旨是致力成為亞洲資通安全服務暨代理領導廠商。<br />uniXecure 專業資安團隊前身皆來自於精誠資訊，自 1997 年跨入資安領域至今，已深耕資安相關技術及服務迄今逾 20 多年，代理超過 30 個國際資安品牌，其團隊累積協助百家跨國、跨產業、公部門、私人企業等客戶進行資安工具建置、網路安全監控及事件應變等多項服務經驗。</p>
            <p class="text-center mb-6">具備豐富的資訊建置、研發、技術及代理經驗，智慧資安科技以「全域聯防 2.0」理念為核心，智慧資安科技率先針對國內外資安規範，提供「事前預防、事中偵測、事後應處」一站式資安服務，整合人員、技術與程序，解決資安合規性與資安人才缺乏的窘境，以自研的 7x24 小時一站式「 MOC 資安監控維運中心 」（Monitoring and Operation Center），發展出具備跨境跨域的 MSSP 託管式資安服務，並結合國內外資安生態系夥伴，於 2024 年整合推出零信任、DevSecOps、OT 資安及雲端合規四大解決方案，全面升級全域聯防效度與維度。</p>
            <div class="row">
                <div class="col-lg-3 col-md-6 mb-3 mb-lg-0">
                    <div class="introduction-item">
                        <span class="introduction-icon"><i class="fa-sharp fa-solid fa-people-group"></i></span>
                        <h5 class="mb-2">企業目標</h5>
                        <p>致力成為亞洲資通安全服務暨代理領導廠商</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-3 mb-lg-0">
                    <div class="introduction-item">
                        <span class="introduction-icon"><i class="fa-solid fa-building"></i></span>
                        <h5 class="mb-2">唯一設置<br />北中南 MOC</h5>
                        <p>Monitoring and Operation Center<br />資安監控維運中心的<br />臺灣資安廠商</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-3 mb-md-0">
                    <div class="introduction-item">
                        <span class="introduction-icon"><i class="fa-solid fa-globe"></i></span>
                        <h5 class="mb-2">代理國內外<br />30 多個資安品牌</h5>
                        <p>零信任、雲資安、可視性分析、人因、工作負載、裝置、網路、數據防護等領域</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="introduction-item">
                        <span class="introduction-icon"><i class="fa-solid fa-monitor-waveform"></i></span>
                        <h5 class="mb-2">結合 7x24<br />MOC 全天候監控服務</h5>
                        <p>讓企業以訂閱方式、享有事前預防、事中偵測、事後應處等一站式資安服務</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section introduction-global">
        <div class="container">
            <h4 class="text-center mb-4">全域聯防 2.0-強化資安效度、維度 提升防禦深度</h4>
            <div class="row">
                <div class="col-lg-3 col-md-6 mb-3 mb-lg-0">
                    <div class="introduction-global-item">
                        <h3 class="text-center text-secondary-800 mb-2">零信任架構</h3>
                        <div class="text-secondary-800 d-flex">
                            <ul class="mx-auto pl-4">
                                <li>身分鑑別</li>
                                <li>設備鑑別</li>
                                <li>信任推斷</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-3 mb-lg-0">
                    <div class="introduction-global-item">
                        <h3 class="text-center text-secondary-800 mb-2">DevSecOps</h3>
                        <div class="text-secondary-800 d-flex">
                            <ul class="mx-auto pl-4">
                                <li>自動化測試</li>
                                <li>持續集成/持續部署</li>
                                <li>安全敏捷開發</li>
                                <li>容器化和微服務架構</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-3 mb-md-0">
                    <div class="introduction-global-item">
                        <h3 class="text-center text-secondary-800 mb-2">OT 資安</h3>
                        <div class="text-secondary-800 d-flex">
                            <ul class="mx-auto pl-4">
                                <li>資安檢測與服務</li>
                                <li>資產盤點與漏洞管理</li>
                                <li>端點防護與監控</li>
                                <li>OT 法規遵循</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="introduction-global-item">
                        <h3 class="text-center text-secondary-800 mb-2">雲資安合規</h3>
                        <div class="text-secondary-800 d-flex">
                            <ul class="mx-auto pl-4">
                                <li>數據加密與保全</li>
                                <li>日誌管理與監控</li>
                                <li>可視化分析</li>
                                <li>異地備份/備援</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!--  -->
            <div class="introduction-global-moc">
                <svg width="162" height="186">
                    <path d="M2.45964 47.6547L81 2.3094L159.54 47.6547V138.345L81 183.691L2.45964 138.345V47.6547Z" fill="url(#paint0_linear_8436_50878)" stroke="white" stroke-width="4" stroke-linejoin="round"/>
                    <defs>
                        <linearGradient id="paint0_linear_8436_50878" x1="294.125" y1="93" x2="-174.75" y2="93" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#171C46"/>
                            <stop offset="0.127208" stop-color="#2B3586"/>
                            <stop offset="0.497978" stop-color="#3C49BA"/>
                            <stop offset="1" stop-color="#ABB1E4"/>
                        </linearGradient>
                    </defs>
                </svg>
                <div class="introduction-global-moc-text">
                    <span>MOC</span>
                    <span>監控維運中心</span>
                </div>
            </div>
            <!--  -->
            <h3 class="text-primary-200 text-center mb-5">跨境跨域 MSSP</h3>
            <div class="row introduction-global-mssp">
                <div class="col-lg-2 col-md-6 introduction-global-mssp-item">
                    <div class="aboutUs-color-dark-purple">
                        <span>SRMAS</span>
                        <span>資源監控</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6 introduction-global-mssp-item">
                    <div class="text-primary">
                        <span>GCB</span>
                        <span>組態設定</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6 introduction-global-mssp-item">
                    <div class="aboutUs-color-purple">
                        <span>EDR</span>
                        <span>端點偵測</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6 introduction-global-mssp-item">
                    <div class="aboutUs-color-green">
                        <span>LUCAS</span>
                        <span>紀錄管理</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6 introduction-global-mssp-item">
                    <div class="aboutUs-color-orange">
                        <span>SIVAS</span>
                        <span>弱點通報</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6 introduction-global-mssp-item">
                    <div class="aboutUs-color-cyan">
                        <span>SSC</span>
                        <span>端點監管</span>
                    </div>
                </div>
            </div>
            <h3 class="text-center text-primary mb-4">打造全面可靠、高效的全域式資安聯防</h3>
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="bg-primary-700 text-white text-center py-4 mb-3 introduction-shadow">效益化企業成本</div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="bg-primary-700 text-white text-center py-4 mb-3 introduction-shadow">智能監控維運</div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="bg-primary-700 text-white text-center py-4 mb-3 introduction-shadow">顧問級服務團隊</div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="bg-primary-700 text-white text-center py-4 mb-3 introduction-shadow">全方位資安防護</div>
                </div>
            </div>
        </div>
    </section>
    <section class="section pb-9">
        <div class="mw-760">
            <figure class="figure mb-4 text-center">
                <img src="../../assets/images/SGS_big.png" class="img-fluid" alt="...">
            </figure>
            <p class="text-center mb-5">MOC 資安監控維運中心目前已取得 ISO 20000 、ISO 27001 與 ISO 27701 等國際認證，能協助組織建立資訊安全管理系統的機密性、完整性及可用性，並透過全面性的風險評估，幫助企業針對風險提出預防措施。</p>
            <div class="text-center mb-9">
                <RouterLink to="/aboutAuthentication" class="btn-block-primary">點我看專業認證 <i class="fa-solid fa-arrow-right-long"></i></RouterLink>
            </div>
            <figure class="figure mb-5">
                <img src="../../assets/images/Introduction-img.png" class="img-fluid" alt="...">
            </figure>
            <div class="text-center">
                <RouterLink to="/statementsLists" class="btn-block-primary">全域聯防終極指南 <i class="fa-solid fa-arrow-right-long"></i></RouterLink>
            </div>
        </div>
    </section>
</template>