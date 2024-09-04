<template>
    <div class="container position-relative">
        <!-- background images start -->
        <span class="contact_bg position-absolute">
            <img src="../assets/images/contact/contact_bg.svg" alt="" class="d-none d-lg-block">
            <img src="../assets/images/contact/contact_phone_bg.svg" alt="" class="d-block d-lg-none">
        </span>
        <!-- background images end -->
        <h1 class="page-title text-white">聯繫我們</h1>
        <div class="bg-white-80 border border-white backdrop-blur-60 pt-5 pb-9 mx-xs-1_5">
            <div class="mw-760">
                <Form @submit="onSubmit">
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <label for="FormName" class="form-label"><span>*</span>聯絡人姓名</label>
                            <Field type="text" class="form-control" id="FormName" v-model="forms.FormName" name="FormName" :rules="isRequired" placeholder="請輸入聯絡人姓名" />
                            <ErrorMessage class="text-alarm" name="FormName" />
                        </div>
                        <div class="col-md-6 mb-4">
                            <label for="FormCompany" class="form-label"><span>*</span>公司名稱</label>
                            <Field type="text" class="form-control" id="FormCompany" v-model="forms.FormCompany" name="FormCompany" :rules="isRequired" placeholder="請輸入公司名稱" />
                            <ErrorMessage class="text-alarm" name="FormCompany" />
                        </div>
                        <div class="col-md-6 mb-4">
                            <label for="FormEmail" class="form-label"><span>*</span>電子信箱 Email</label>
                            <Field type="email" class="form-control" id="FormEmail" v-model="forms.FormEmail" name="FormEmail" :rules="validateEmail" placeholder="請輸入電子信箱 Email" />
                            <ErrorMessage class="text-alarm" name="FormEmail" />
                        </div>
                        <div class="col-md-6 mb-4">
                            <label for="FormTel" class="form-label"><span>*</span>聯絡電話（分機請加上#）</label>
                            <Field type="text" class="form-control" id="FormTel" v-model="forms.FormTel" name="FormTel" :rules="validateTel" placeholder="請輸入聯絡電話" />
                            <ErrorMessage class="text-alarm" name="FormTel" />
                        </div>
                        <div class="col-md-6 mb-4">
                            <label for="FormDepartment" class="form-label"><span>*</span>部門</label>
                            <Field class="form-select" id="FormDepartment" v-model="forms.FormDepartment" name="FormDepartment" as="select" :rules="isRequired">
                                <option disabled value="">請選擇部門</option>
                                <option :value="item.value" v-for="item in departmentOptions" :key="item.text">{{ item.text }}</option>
                            </Field>
                            <ErrorMessage class="text-alarm" name="FormDepartment" as="span">{{ errorMessages.select + '部門' }}</ErrorMessage>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label for="FormTitle" class="form-label"><span>*</span>職務</label>
                            <Field class="form-select" id="FormTitle" v-model="forms.FormTitle" name="FormTitle" as="select" :rules="isRequired">
                                <option disabled value="">請選擇職務</option>
                                <option :value="item.value" v-for="item in titleOptions" :key="item.text">{{ item.text }}</option>
                            </Field>
                            <ErrorMessage class="text-alarm" name="FormTitle" as="span">{{ errorMessages.select + '職務' }}</ErrorMessage>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label for="FormCompilationId" class="form-label">公司統一編號</label>
                            <Field type="text" class="form-control" id="FormCompilationId" v-model="forms.FormCompilationId" name="FormCompilationId" placeholder="請輸入公司統一編號" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="FormIndustry" class="form-label"><span>*</span>行業別</label>
                            <Field class="form-select" id="FormIndustry" v-model="forms.FormIndustry" name="FormIndustry" as="select" :rules="isRequired">
                                <option disabled value="">請選擇行業別</option>
                                <option :value="item.value" v-for="item in industryOptions" :key="item.text">{{ item.text }}</option>
                            </Field>
                            <ErrorMessage class="text-alarm" name="FormIndustry" as="span">{{ errorMessages.select + '行業別' }}</ErrorMessage>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label for="FormBudget" class="form-label"><span>*</span>資安預算</label>
                            <Field class="form-select" id="FormBudget" v-model="forms.FormBudget" name="FormBudget" as="select" :rules="isRequired">
                                <option disabled value="">請選擇資安預算</option>
                                <option :value="item.value" v-for="item in budgetOptions" :key="item.text">{{ item.text }}</option>
                            </Field>
                            <ErrorMessage class="text-alarm" name="FormBudget" as="span">{{ errorMessages.select + '資安預算' }}</ErrorMessage>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label for="FormStaffing" class="form-label">貴公司資安專責人編制</label>
                            <Field class="form-select" id="FormStaffing" v-model="forms.FormStaffing" name="FormStaffing" as="select">
                                <option disabled value="">請選擇</option>
                                <option :value="item.value" v-for="item in staffingOptions" :key="item.text">{{ item.text }}</option>
                            </Field>
                        </div>
                        <div class="col-12 mb-3 fs-6">諮詢項目</div>
                        <div class="col-md-6 mb-3">
                            <label for="FormServes" class="form-label">資安法相關</label>
                            <Field class="form-select" id="FormServes" v-model="forms.FormServes" name="FormServes" as="select">
                                <option disabled value="" >請選擇資安法相關</option>
                                <option :value="item.value" v-for="item in servesOptions" :key="item.text">{{ item.text }}</option>
                            </Field>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="FormRepresent" class="form-label">代理產品</label>
                            <Field class="form-select" id="FormRepresent" v-model="forms.FormRepresent" name="FormRepresent" as="select">
                                <option disabled value="" >請選擇代理產品</option>
                                <option :value="item.value" v-for="item in representOpptions" :key="item.text">{{ item.text }}</option>
                            </Field>
                        </div>
                        <div class="col-12 mb-4">
                            <div class="form-check form-check-inline mb-3">
                                <Field class="form-check-input" type="checkbox" id="FormItem1" v-model="forms.FormItem" value="詢問產品價格" name="FormItem" />
                                <label class="form-check-label" for="FormItem1">詢問產品價格</label>
                            </div>
                            <div class="form-check form-check-inline mb-3">
                                <Field class="form-check-input" type="checkbox" id="FormItem2" v-model="forms.FormItem" value="了解產品資訊" name="FormItem" />
                                <label class="form-check-label" for="FormItem2">了解產品資訊</label>
                            </div>
                            <div class="form-check form-check-inline mb-3">
                                <Field class="form-check-input" type="checkbox" id="FormItem3" v-model="forms.FormItem" value="索取相關活動" name="FormItem" />
                                <label class="form-check-label" for="FormItem3">索取相關活動</label>
                            </div>
                            <div class="form-check form-check-inline mb-3">
                                <Field class="form-check-input" type="checkbox" id="FormItem4" v-model="forms.FormItem" value="預約 POC" name="FormItem" />
                                <label class="form-check-label" for="FormItem4">預約 POC</label>
                            </div>
                            <div class="form-check mb-1">
                                <Field class="form-check-input" type="checkbox" id="FormItem5" v-model="forms.FormItem" value="其他" name="FormItem" @click="clearTextarea(otherChecked)" />
                                <label class="form-check-label" for="FormItem5">其他</label>
                            </div>
                            <Field as="textarea" class="form-control" id="FormRemark" v-model="forms.FormRemark" name="FormRemark" rows="3" placeholder="請輸入其他諮詢項目" :disabled="isDisabled" />
                            <!-- <ErrorMessage class="text-alarm" name="FormRemark" /> -->
                        </div>
                        <div class="col-12">
                            <div class="text-center mb-4">
                                <button class="btn btn-contact">聯繫我們</button>
                            </div>
                            <div class="text-center">
                                <RouterLink to="/aboutMap" class="btn-block-primary text-gray-800" title="點我看營業據點">點我看營業據點 <i class="fa-solid fa-arrow-right-long"></i></RouterLink>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>

<script>
    import { Form, Field, ErrorMessage } from 'vee-validate';
    export default {
        components: {
            Form,
            Field,
            ErrorMessage 
        },
        data() {
            return {
                errorMessages: {
                    required: '此欄位不能為空白',
                    email: '請輸入正確電子信箱格式',
                    phone: '請輸入正確電話格式',
                    select: '此欄位必須選擇'
                },
                departmentOptions: [
                    {text: '資訊系統/技術', value: '資訊系統/技術'},
                    {text: '銷售', value: '銷售'},
                    {text: '公關/行銷', value: '公關/行銷'},
                    {text: '電子商務', value: '電子商務'},
                    {text: '財務/會計', value: '財務/會計'},
                    {text: '客服/支援', value: '客服/支援'},
                    {text: '製造/生產', value: '製造/生產'},
                    {text: '硏發', value: '硏發'},
                    {text: '管理', value: '管理'},
                    {text: '採購', value: '採購'},
                    {text: '人力資源', value: '人力資源'},
                    {text: '工程', value: '工程'},
                    {text: '法務', value: '法務'}
                ],
                titleOptions: [
                    {text: '執行長', value: '執行長'},
                    {text: '資訊長', value: '資訊長'},
                    {text: '營運長', value: '營運長'},
                    {text: '科技長', value: '科技長'},
                    {text: '行銷長', value: '行銷長'},
                    {text: '財務長', value: '財務長'},
                    {text: '協理', value: '協理'},
                    {text: '初/中階主管', value: '初/中階主管'},
                    {text: '科長/課長', value: '科長/課長'},
                    {text: '董事會成員', value: '董事會成員'},
                    {text: 'IT/MIS主管', value: 'IT/MIS主管'},
                    {text: 'IT/MIS工程師', value: 'IT/MIS工程師'},
                    {text: 'IT-多重角色', value: 'IT-多重角色'},
                    {text: '研發/技術/軟體主管', value: '研發/技術/軟體主管'},
                    {text: '專員/專業人員', value: '專員/專業人員'},
                    {text: '業務代表', value: '業務代表'},
                    {text: '技術/商業顧問', value: '技術/商業顧問'},
                    {text: '法務主管/人員', value: '法務主管/人員'},
                    {text: '行政人員', value: '行政人員'}
                ],
                industryOptions: [
                    {text: '生技', value: '生技'},
                    {text: '貿易百貨', value: '貿易百貨'},
                    {text: '個人', value: '個人'},
                    {text: '銀行', value: '銀行'},
                    {text: '證券', value: '證券'},
                    {text: '保險', value: '保險'},
                    {text: '金融業其他', value: '金融業其他'},
                    {text: '醫療', value: '醫療'},
                    {text: '資訊服務', value: '資訊服務'},
                    {text: '通信網路', value: '通信網路'},
                    {text: '教育服務', value: '教育服務'},
                    {text: '政府機關', value: '政府機關'},
                    {text: '半導體業', value: '半導體業'},
                    {text: '電腦週邊', value: '電腦週邊'},
                    {text: '光電業', value: '光電業'},
                    {text: '電子零組件', value: '電子零組件'},
                    {text: '汽車工業', value: '汽車工業'},
                    {text: '製造業其他', value: '製造業其他'},
                    {text: '鋼鐵工業', value: '鋼鐵工業'},
                    {text: '造紙工業', value: '造紙工業'},
                    {text: '塑膠工業', value: '塑膠工業'},
                    {text: '化學工業', value: '化學工業'},
                    {text: '紡織纖維', value: '紡織纖維'},
                    {text: '電機機械', value: '電機機械'},
                    {text: '食品工業', value: '食品工業'},
                    {text: '運輸', value: '運輸'},
                    {text: '電子通路', value: '電子通路'},
                    {text: '觀光餐飲', value: '觀光餐飲'},
                    {text: '專業服務', value: '專業服務'},
                    {text: '建材營造', value: '建材營造'},
                    {text: '水電/石油/燃氣供應業', value: '水電/石油/燃氣供應業'},
                    {text: '礦業及士石採取業', value: '礦業及士石採取業'},
                    {text: '文化創意業', value: '文化創意業'},
                    {text: '電子商務', value: '電子商務'}
                ],
                budgetOptions: [
                    {text: '100萬以下', value: '100萬以下'},
                    {text: '100萬~200萬', value: '100萬~200萬'},
                    {text: '200萬~300萬', value: '200萬~300萬'},
                    {text: '300萬以上', value: '300萬以上'}
                ],
                staffingOptions: [
                    {text: '1~3人', value: '1~3人'},
                    {text: '3~6人', value: '3~6人'},
                    {text: '6~10人', value: '6~10人'},
                    {text: '10人以上', value: '10人以上'}
                ],
                servesOptions: [
                    {text: '滲透測試', value: '滲透測試'},
                    {text: '弱點掃描', value: '弱點掃描'},
                    {text: 'APP 資安檢測', value: 'APP 資安檢測'},
                    {text: '資通安全健診', value: '資通安全健診'},
                    {text: '政府組態基準 GCB', value: '政府組態基準 GCB'},
                    {text: '資安監控維運服務-MOC', value: '資安監控維運服務-MOC'},
                    {text: '社交工程演練-HEIS', value: '社交工程演練-HEIS'},
                    {text: '電子郵件過濾-SESC', value: '電子郵件過濾-SESC'},
                    {text: '系統資源監測-SRMAS', value: '系統資源監測-SRMAS'},
                    {text: '資通安全弱點通報-SIVAS', value: '資通安全弱點通報-SIVAS'},
                    {text: '日誌管理系統-LUCAS', value: '日誌管理系統-LUCAS'},
                    {text: '資通安全威脅偵測管理-SOC', value: '資通安全威脅偵測管理-SOC'},
                    {text: '代理產品相關', value: '代理產品相關'},
                    {text: '其他', value: '其他'}
                ],
                representOpptions: [
                    {text: 'CELLOPOINT', value: 'CELLOPOINT'},
                    {text: 'Delinea', value: 'Delinea'},
                    {text: 'eLock', value: 'eLock'},
                    {text: 'ENTRUST', value: 'ENTRUST'},
                    {text: 'Illumio', value: 'Illumio'},
                    {text: 'Invicti', value: 'Invicti'},
                    {text: 'NEITHNET', value: 'NEITHNET'},
                    {text: 'OPSWAT', value: 'OPSWAT'},
                    {text: 'RAPID7', value: 'RAPID7'},
                    {text: 'SecurityScorecard', value: 'SecurityScorecard'},
                    {text: 'Skyhigh', value: 'Skyhigh'},
                    {text: 'Tufin', value: 'Tufin'}
                ],
                forms: {
                    FormName: '',
                    FormCompany: '',
                    FormEmail: '',
                    FormTel: '',
                    FormDepartment: '',
                    FormTitle: '',
                    FormCompilationId: '',
                    FormIndustry: '',
                    FormBudget: '',
                    FormStaffing: '',
                    FormServes: '',
                    FormRepresent: '',
                    FormItem: [],
                    FormRemark: ''
                },
                isDisabled: true,
                errorMessage: false
            }
        },        
        methods: {
            isRequired(value) {
                if (!value) {
                    return this.errorMessages.required;
                }
                return true
            },
            validateEmail(value) {
                if (!value) {
                    return this.errorMessages.required;
                }
                const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                if (!regex.test(value)) {
                    return this.errorMessages.email;
                }
                // All is good
                return true;
            },
            validateTel(value) {
                if (!value) {
                    return this.errorMessages.required;
                }
                const regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-#\s\\./0-9]*$/g;
                if (!regex.test(value) || value.length < 7) {
                    return this.errorMessages.phone;
                }
                // All is good
                return true;
            },
            clearTextarea(checked) {
                this.otherChecked = !this.otherChecked;
                this.otherChecked === false ? this.isDisabled = true :  this.isDisabled = false
                checked = this.isDisabled
                console.log(checked)
            },
            onSubmit(values) {
                const api = 'https://10.13.202.198:7070/api/contact_us/insert';
                // fetch
                fetch(api, {
                    method: 'post',
                    body: values,
                }).then((response) => {
                    console.log(response.data)
                }).catch(err => {
                    console.log(err)
                })
            },
        }
    }
</script>