<script setup>
    import { useForm } from 'vee-validate'
    import * as yup from 'yup';

    // 
    const validationSchema = yup.object({
        ContactName: yup.string().required('此欄位不能為空白'),
        CompanyName: yup.string().required('此欄位不能為空白'),
        ContactEamil: yup.string().email('請輸入正確電子信箱格式').required('此欄位不能為空白'),
        ContactTel: yup.string().min(7, '請輸入正確電話格式').matches(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-#\s\\./0-9]*$/g, '請輸入正確電話格式').required('此欄位不能為空白'),
        Department: yup.string().required('此欄位必須選擇部門'),
        JobTitle: yup.string().required('此欄位必須選擇職務'),
        ConsultingProject: yup.array(),
        isChecked: yup.boolean(),
        Remark: yup
            .string()
            .when('isChecked', {
                is: true,
                then: validationSchema => validationSchema.required('此欄位不能為空白'),
                otherwise: validationSchema => validationSchema.notRequired(),
            }),
    })
    // 
    const { handleSubmit, defineField, errors } = useForm({
        validationSchema,
        initialValues: {
            ContactName: '',
            CompanyName: '',
            ContactEamil: '',
            ContactTel: '',
            Department: '',
            JobTitle: '',
            ConsultingProject: [],
            isChecked: false,
            Remark: ''
        },
    })
    // department options
    const departmentOptions = [
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
    ]
    // 
    const titleOptions = [
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
    ]
    // industry Options
    // const industryOptions = [
    //     {text: '生技', value: '生技'},
    //     {text: '貿易百貨', value: '貿易百貨'},
    //     {text: '個人', value: '個人'},
    //     {text: '銀行', value: '銀行'},
    //     {text: '證券', value: '證券'},
    //     {text: '保險', value: '保險'},
    //     {text: '金融業其他', value: '金融業其他'},
    //     {text: '醫療', value: '醫療'},
    //     {text: '資訊服務', value: '資訊服務'},
    //     {text: '通信網路', value: '通信網路'},
    //     {text: '教育服務', value: '教育服務'},
    //     {text: '政府機關', value: '政府機關'},
    //     {text: '半導體業', value: '半導體業'},
    //     {text: '電腦週邊', value: '電腦週邊'},
    //     {text: '光電業', value: '光電業'},
    //     {text: '電子零組件', value: '電子零組件'},
    //     {text: '汽車工業', value: '汽車工業'},
    //     {text: '製造業其他', value: '製造業其他'},
    //     {text: '鋼鐵工業', value: '鋼鐵工業'},
    //     {text: '造紙工業', value: '造紙工業'},
    //     {text: '塑膠工業', value: '塑膠工業'},
    //     {text: '化學工業', value: '化學工業'},
    //     {text: '紡織纖維', value: '紡織纖維'},
    //     {text: '電機機械', value: '電機機械'},
    //     {text: '食品工業', value: '食品工業'},
    //     {text: '運輸', value: '運輸'},
    //     {text: '電子通路', value: '電子通路'},
    //     {text: '觀光餐飲', value: '觀光餐飲'},
    //     {text: '專業服務', value: '專業服務'},
    //     {text: '建材營造', value: '建材營造'},
    //     {text: '水電/石油/燃氣供應業', value: '水電/石油/燃氣供應業'},
    //     {text: '礦業及士石採取業', value: '礦業及士石採取業'},
    //     {text: '文化創意業', value: '文化創意業'},
    //     {text: '電子商務', value: '電子商務'}
    // ]
    // budget Options
    // const budgetOptions = [
    //     {text: '100萬以下', value: '100萬以下'},
    //     {text: '100萬~200萬', value: '100萬~200萬'},
    //     {text: '200萬~300萬', value: '200萬~300萬'},
    //     {text: '300萬以上', value: '300萬以上'}
    // ]
    // // staffing Options
    // const staffingOptions = [
    //     {text: '1~3人', value: '1~3人'},
    //     {text: '3~6人', value: '3~6人'},
    //     {text: '6~10人', value: '6~10人'},
    //     {text: '10人以上', value: '10人以上'}
    // ]
    // // serves Options
    // const servesOptions = [
    //     {text: '滲透測試', value: '滲透測試'},
    //     {text: '弱點掃描', value: '弱點掃描'},
    //     {text: 'APP 資安檢測', value: 'APP 資安檢測'},
    //     {text: '資通安全健診', value: '資通安全健診'},
    //     {text: '政府組態基準 GCB', value: '政府組態基準 GCB'},
    //     {text: '資安監控維運服務-MOC', value: '資安監控維運服務-MOC'},
    //     {text: '社交工程演練-HEIS', value: '社交工程演練-HEIS'},
    //     {text: '電子郵件過濾-SESC', value: '電子郵件過濾-SESC'},
    //     {text: '系統資源監測-SRMAS', value: '系統資源監測-SRMAS'},
    //     {text: '資通安全弱點通報-SIVAS', value: '資通安全弱點通報-SIVAS'},
    //     {text: '日誌管理系統-LUCAS', value: '日誌管理系統-LUCAS'},
    //     {text: '資通安全威脅偵測管理-SOC', value: '資通安全威脅偵測管理-SOC'},
    //     {text: '代理產品相關', value: '代理產品相關'},
    //     {text: '其他', value: '其他'}
    // ]
    // // represent Options
    // const representOptions = [
    //     {text: 'CELLOPOINT', value: 'CELLOPOINT'},
    //     {text: 'Delinea', value: 'Delinea'},
    //     {text: 'eLock', value: 'eLock'},
    //     {text: 'ENTRUST', value: 'ENTRUST'},
    //     {text: 'Illumio', value: 'Illumio'},
    //     {text: 'Invicti', value: 'Invicti'},
    //     {text: 'NEITHNET', value: 'NEITHNET'},
    //     {text: 'OPSWAT', value: 'OPSWAT'},
    //     {text: 'RAPID7', value: 'RAPID7'},
    //     {text: 'SecurityScorecard', value: 'SecurityScorecard'},
    //     {text: 'Skyhigh', value: 'Skyhigh'},
    //     {text: 'Tufin', value: 'Tufin'}
    // ]
    // 
    const [ContactName] = defineField('ContactName')
    const [CompanyName] = defineField('CompanyName')
    const [ContactEamil] = defineField('ContactEamil')
    const [ContactTel] = defineField('ContactTel')
    const [Department] = defineField('Department')
    const [JobTitle] = defineField('JobTitle')
    const [ConsultingProject] = defineField('ConsultingProject')
    const [isChecked] = defineField('isChecked')
    const [Remark] = defineField('Remark')
    // post
    const onSubmit = handleSubmit((values) => {
        const forms = {
            ContactName: values.ContactName,
            CompanyName: values.CompanyName,
            ContactEamil: values.ContactEamil,
            ContactTel: values.ContactTel,
            Department: values.Department,
            JobTitle: values.JobTitle,
            ConsultingProject: values.ConsultingProject.String(),
            Remark: values.Remark
        }
        console.log(forms)
        // // 傳遞表單數據
        const response = fetch('https://10.13.202.198:7070/api/contact_us/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(forms) 
        })

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = response.json()
        console.log('Success:', data)
        
    })
</script>

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
                <form @submit.prevent="onSubmit">
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <div :class="{'requiredField' : errors.ContactName}">
                                <label for="ContactName" class="form-label"><span>*</span>聯絡人姓名</label>
                                <input type="text" id="ContactName" class="form-control" v-model="ContactName" name="ContactName" placeholder="請輸入聯絡人姓名" />
                                <span class="text-alarm">{{ errors.ContactName }}</span>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div :class="{'requiredField' : errors.CompanyName}">
                                <label for="CompanyName" class="form-label"><span>*</span>公司名稱</label>
                                <input type="text" id="CompanyName" class="form-control" v-model="CompanyName" name="CompanyName" placeholder="請輸入公司名稱" />
                                <span class="text-alarm">{{ errors.CompanyName }}</span>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div :class="{'requiredField' : errors.ContactEamil}">
                                <label for="ContactEamil" class="form-label"><span>*</span>電子信箱 Email</label>
                                <input type="email" id="ContactEamil" class="form-control" v-model.trim="ContactEamil" name="ContactEamil" placeholder="請輸入電子信箱 Email" />
                                <span class="text-alarm">{{ errors.ContactEamil }}</span>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div :class="{'requiredField' : errors.ContactTel}">
                                <label for="ContactTel" class="form-label"><span>*</span>聯絡電話（分機請加上#）</label>
                                <input type="text" id="ContactTel" class="form-control" v-model="ContactTel" name="ContactTel" placeholder="請輸入聯絡電話" />
                                <span class="text-alarm">{{ errors.ContactTel }}</span>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div :class="{'requiredField' : errors.Department}">
                                <label for="Department" class="form-label"><span>*</span>部門</label>
                                <select id="Department" class="form-select" v-model="Department" name="Department">
                                    <option disabled value="">請選擇部門</option>
                                    <option :value="item.value" v-for="item in departmentOptions" :key="item.text">{{ item.text }}</option>
                                </select>
                                <span class="text-alarm">{{ errors.Department }}</span>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div :class="{'requiredField' : errors.JobTitle}">
                                <label for="JobTitle" class="form-label"><span>*</span>職務</label>
                                <select id="JobTitle" class="form-select" v-model="JobTitle" name="JobTitle">
                                    <option disabled value="">請選擇職務</option>
                                    <option :value="item.value" v-for="item in titleOptions" :key="item.text">{{ item.text }}</option>
                                </select>
                                <span class="text-alarm">{{ errors.JobTitle }}</span>
                            </div>
                        </div>
                        <!-- <div class="col-md-6 mb-4">
                            <label for="FormCompilationId" class="form-label">公司統一編號</label>
                            <input type="text" class="form-control" id="FormCompilationId" name="FormCompilationId" placeholder="請輸入公司統一編號" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="FormIndustry" class="form-label"><span>*</span>行業別</label>
                            <select class="form-select" id="FormIndustry" name="FormIndustry">
                                <option disabled value="">請選擇行業別</option>
                                <option :value="item.value" v-for="item in industryOptions" :key="item.text">{{ item.text }}</option>
                            </select>
                        </div> -->
                        <!-- <div class="col-md-6 mb-4">
                            <label for="FormBudget" class="form-label"><span>*</span>資安預算</label>
                            <select class="form-select" id="FormBudget" name="FormBudget">
                                <option disabled value="">請選擇資安預算</option>
                                <option :value="item.value" v-for="item in budgetOptions" :key="item.text">{{ item.text }}</option>
                            </select>
                        </div> -->
                        <!-- <div class="col-md-6 mb-4">
                            <label for="FormStaffing" class="form-label">貴公司資安專責人編制</label>
                            <select class="form-select" id="FormStaffing" name="FormStaffing">
                                <option disabled value="">請選擇</option>
                                <option :value="item.value" v-for="item in staffingOptions" :key="item.text">{{ item.text }}</option>
                            </select>
                        </div> -->
                        <div class="col-12 mb-3 fs-6">諮詢項目</div>
                        <!-- <div class="col-md-6 mb-3">
                            <label for="FormServes" class="form-label">資安法相關</label>
                            <select class="form-select" id="FormServes" name="FormServes">
                                <option disabled value="" >請選擇資安法相關</option>
                                <option :value="item.value" v-for="item in servesOptions" :key="item.text">{{ item.text }}</option>
                            </select>
                        </div> -->
                        <!-- <div class="col-md-6 mb-3">
                            <label for="FormRepresent" class="form-label">代理產品</label>
                            <select class="form-select" id="FormRepresent" name="FormRepresent">
                                <option disabled value="" >請選擇代理產品</option>
                                <option :value="item.value" v-for="item in representOptions" :key="item.text">{{ item.text }}</option>
                            </select>
                        </div> -->
                        <div class="col-12 mb-4">
                            <div class="form-check form-check-inline mb-3">
                                <input class="form-check-input" type="checkbox" id="FormItem1" v-model="ConsultingProject" value="詢問產品價格" name="ConsultingProject" />
                                <label class="form-check-label" for="FormItem1">詢問產品價格</label>
                            </div>
                            <div class="form-check form-check-inline mb-3">
                                <input class="form-check-input" type="checkbox" id="FormItem2" v-model="ConsultingProject" value="了解產品資訊" name="ConsultingProject" />
                                <label class="form-check-label" for="FormItem2">了解產品資訊</label>
                            </div>
                            <div class="form-check form-check-inline mb-3">
                                <input class="form-check-input" type="checkbox" id="FormItem3" v-model="ConsultingProject" value="索取相關活動" name="ConsultingProject" />
                                <label class="form-check-label" for="FormItem3">索取相關活動</label>
                            </div>
                            <div class="form-check form-check-inline mb-3">
                                <input class="form-check-input" type="checkbox" id="FormItem4" v-model="ConsultingProject" value="預約 POC" name="ConsultingProject" />
                                <label class="form-check-label" for="FormItem4">預約 POC</label>
                            </div>
                            <div class="form-check mb-1">
                                <input class="form-check-input" type="checkbox" id="FormItem5" v-model="isChecked" />
                                <label class="form-check-label" for="FormItem5">其他</label>
                            </div>
                            <div :class="{'requiredField' : errors.Remark}">
                                <textarea class="form-control" v-model="Remark" name="Remark" rows="3" placeholder="請輸入其他諮詢項目" :disabled="!isChecked"></textarea>
                                <span class="text-alarm">{{ errors.Remark }}</span>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="text-center mb-4">
                                <button type="submit" class="btn btn-contact">聯繫我們</button>
                            </div>
                            <div class="text-center">
                                <RouterLink to="/aboutMap" class="btn-block-primary text-gray-800" title="點我看營業據點">點我看營業據點 <i class="fa-solid fa-arrow-right-long"></i></RouterLink>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<!-- <script>
    // import { Form, Field, ErrorMessage } from 'vee-validate';
    import { useForm, useField } from 'vee-validate';
    import * as yup from 'yup';
    export default {
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
                isDisabled: true,
                errorMessage: false
            }
        },
        setup() {
            const schema = yup.object({
                name: yup.string().required('Name is required')
            })

            const form = {
                ContactName: ''
            }

            const { handleSubmit, errors } = useForm({
                validationSchema: schema
            })

            
            const submitForm = handleSubmit((values) => {
                console.log('Form data'+values);
            });

            return {
                errors,
                form,
                submitForm
            }
        }
    }
</script> -->