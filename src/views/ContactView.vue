<script setup>
    import { ref } from 'vue';
    import { useForm } from 'vee-validate'
    import * as yup from 'yup';
    import Swal from 'sweetalert2'
    import Recaptcha from '../components/RecaptchaComponents.vue'
    import router from '@/router'
    // validation schema
    const validationSchema = yup.object({
        ContactName: yup.string().required('此欄位不能為空白'),
        CompanyName: yup.string().required('此欄位不能為空白'),
        ContactEmail: yup.string().email('請輸入正確電子信箱格式').required('此欄位不能為空白'),
        ContactTel: yup.string()
        .test('valid-phone', '電話號碼必須至少包含7位數字', (value) => {
            if (!value) return false; 
            const cleanedValue = value.split('#')[0].replace(/\D/g, ''); 
            return cleanedValue.length >= 7; 
        })
        .test('has-hash', '如果有「#」號，必須填寫分機號碼', (value) => {
            if (!value) return true; // 無需驗證空值
            const hashIndex = value.indexOf('#');
            if (hashIndex !== -1) {
                // 確保#號後面有數字
                return /\d/.test(value.slice(hashIndex + 1));
            }
            return true;
        })
        .required('此欄位不能為空白'),
        Department: yup.string().required('此欄位必須選擇部門'),
        JobTitle: yup.string().required('此欄位必須選擇職務'),
        ConsultingProject: yup.array(),
        CompilationId: yup.string().matches(/^\d{8}$/, '請輸入正確的統一編號8位數').required('此欄位不能為空白'),
        Industry: yup.string().required('此欄位必須選擇行業別'),
        Budget: yup.string().required('此欄位必須選擇資安預算'),
        Staffing: yup.string().required('此欄位必須選擇資安專責人編制'),
        Serves: yup.string(),
        Represent: yup.string(),
        Remark: yup.string().when('ConsultingProject', {
            is: (options) => options.includes('5'),
            then: validationSchema => validationSchema.required('此欄位不能為空白'),
            otherwise: validationSchema => validationSchema.notRequired(),
        })
    })
    // 
    const { handleSubmit, resetForm, defineField, errors } = useForm({
        validationSchema,
        initialValues: {
            ContactName: '',
            CompanyName: '',
            ContactEmail: '',
            ContactTel: '',
            Department: '',
            JobTitle: '',
            ConsultingProject: [],
            CompilationId: '',
            Industry: '',
            Budget: '',
            Staffing: '',
            Serves: '',
            Represent: '',
            Remark: ''
        },
    })
    // defineField
    const [ContactName] = defineField('ContactName')
    const [CompanyName] = defineField('CompanyName')
    const [ContactEmail] = defineField('ContactEmail')
    const [ContactTel] = defineField('ContactTel')
    const [Department] = defineField('Department')
    const [JobTitle] = defineField('JobTitle')
    const [ConsultingProject] = defineField('ConsultingProject')
    const [CompilationId] = defineField('CompilationId')
    const [Industry] = defineField('Industry')
    const [Budget] = defineField('Budget')
    const [Staffing] = defineField('Staffing')
    const [Serves] = defineField('Serves')
    const [Represent] = defineField('Represent')
    const [Remark] = defineField('Remark')

    // department options
    const departmentOptions = [
        {text: '資訊系統/技術', value: '1'},
        {text: '銷售', value: '2'},
        {text: '公關/行銷', value: '3'},
        {text: '電子商務', value: '4'},
        {text: '財務/會計', value: '5'},
        {text: '客服/支援', value: '6'},
        {text: '製造/生產', value: '7'},
        {text: '硏發', value: '8'},
        {text: '管理', value: '9'},
        {text: '採購', value: '10'},
        {text: '人力資源', value: '11'},
        {text: '工程', value: '12'},
        {text: '法務', value: '13'}
    ]
    // jobTitle Options
    const jobTitleOptions = [
        {text: '執行長', value: '1'},
        {text: '資訊長', value: '2'},
        {text: '營運長', value: '3'},
        {text: '科技長', value: '4'},
        {text: '行銷長', value: '5'},
        {text: '財務長', value: '6'},
        {text: '協理', value: '7'},
        {text: '初/中階主管', value: '8'},
        {text: '科長/課長', value: '9'},
        {text: '董事會成員', value: '10'},
        {text: 'IT/MIS主管', value: '10'},
        {text: 'IT/MIS工程師', value: '12'},
        {text: 'IT-多重角色', value: '13'},
        {text: '研發/技術/軟體主管', value: '14'},
        {text: '專員/專業人員', value: '15'},
        {text: '業務代表', value: '16'},
        {text: '技術/商業顧問', value: '17'},
        {text: '法務主管/人員', value: '18'},
        {text: '行政人員', value: '19'}
    ]
    // industry Options
    const industryOptions = [
        {text: '生技', value: '1'},
        {text: '貿易百貨', value: '2'},
        {text: '個人', value: '3'},
        {text: '銀行', value: '4'},
        {text: '證券', value: '5'},
        {text: '保險', value: '6'},
        {text: '金融業其他', value: '7'},
        {text: '醫療', value: '8'},
        {text: '資訊服務', value: '9'},
        {text: '通信網路', value: '10'},
        {text: '教育服務', value: '11'},
        {text: '政府機關', value: '12'},
        {text: '半導體業', value: '13'},
        {text: '電腦週邊', value: '14'},
        {text: '光電業', value: '15'},
        {text: '電子零組件', value: '16'},
        {text: '汽車工業', value: '17'},
        {text: '製造業其他', value: '18'},
        {text: '鋼鐵工業', value: '19'},
        {text: '造紙工業', value: '20'},
        {text: '塑膠工業', value: '21'},
        {text: '化學工業', value: '22'},
        {text: '紡織纖維', value: '23'},
        {text: '電機機械', value: '24'},
        {text: '食品工業', value: '25'},
        {text: '運輸', value: '26'},
        {text: '電子通路', value: '27'},
        {text: '觀光餐飲', value: '28'},
        {text: '專業服務', value: '29'},
        {text: '建材營造', value: '30'},
        {text: '水電/石油/燃氣供應業', value: '31'},
        {text: '礦業及士石採取業', value: '32'},
        {text: '文化創意業', value: '33'},
        {text: '電子商務', value: '34'}
    ]
    // budget Options
    const budgetOptions = [
        {text: '100萬以下', value: '1'},
        {text: '100萬~200萬', value: '2'},
        {text: '200萬~300萬', value: '3'},
        {text: '300萬以上', value: '4'}
    ]
    // staffing Options
    const staffingOptions = [
        {text: '1~3人', value: '1'},
        {text: '3~6人', value: '2'},
        {text: '6~10人', value: '3'},
        {text: '10人以上', value: '4'}
    ]
    // serves Options
    const servesOptions = [
        {text: '滲透測試', value: '1'},
        {text: '弱點掃描', value: '2'},
        {text: 'APP 資安檢測', value: '3'},
        {text: '資通安全健診', value: '4'},
        {text: '政府組態基準 GCB', value: '5'},
        {text: '資安監控維運服務-MOC', value: '6'},
        {text: '社交工程演練-HEIS', value: '7'},
        {text: '電子郵件過濾-SESC', value: '8'},
        {text: '系統資源監測-SRMAS', value: '9'},
        {text: '資通安全弱點通報-SIVAS', value: '10'},
        {text: '日誌管理系統-LUCAS', value: '11'},
        {text: '資通安全威脅偵測管理-SOC', value: '12'},
        {text: '代理產品相關', value: '13'},
        {text: '其他', value: '14'}
    ]
    // represent Options
    const representOptions = [
        {text: 'CELLOPOINT', value: '1'},
        {text: 'Delinea', value: '2'},
        {text: 'eLock', value: '3'},
        {text: 'ENTRUST', value: '4'},
        {text: 'Illumio', value: '5'},
        {text: 'Invicti', value: '6'},
        {text: 'NEITHNET', value: '7'},
        {text: 'OPSWAT', value: '8'},
        {text: 'RAPID7', value: '9'},
        {text: 'Tufin', value: '10'}
    ]
    // recaptcha
    const recaptchaVerified = ref(false);
    const recaptchaToken = ref('');

    const onRecaptchaVerified = (token) => {
        recaptchaToken.value = token;
        recaptchaVerified.value = true;
    };

    const onRecaptchaExpired = () => {
        recaptchaToken.value = '';
        recaptchaVerified.value = false;
    };
    // const getApiUrl = (currentServerName) => {
    //     switch (currentServerName) {
    //         case '10.13.202.175':
    //             return '/175'
    //         case '10.13.202.198':
    //             return '/198'
    //         case '118.163.244.11':
    //             return '/118'
    //         case 'www.unixecure.com':
    //             return '/unixecure'
    //         default:
    //             break;
    //     }
    // }
    // 正式提交表單
    const createResource = (values) => {
        fetch('https://10.13.202.198:7070/api/contact_us/test', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        })
        .then(res => {return res.json()})
        .then(res => {
            console.log(res.state)
            if(res.state.status === 'success') {
                Swal.fire({
                    text: '表單成功送出',
                    icon: 'success',
                    confirmButtonText: '確定',
                    preConfirm: () => {
                        // 提交成功後清空表單
                        resetForm();
                        router.push({ name: 'contactSuccess' })
                    }
                });
            } else {
                Swal.fire({
                    text: res.msg,
                    icon: 'error',
                    confirmButtonText: '確定',
                });
            }
        })
        .catch (error => { console.error('Error:', error)}) 
    } 
    // Submit
    const onSubmit = handleSubmit((values) => {
        const forms = {
            CompanyName: values.CompanyName,
            ContactName: values.ContactName,
            Department: values.Department,
            JobTitle: values.JobTitle,
            ContactTel: values.ContactTel,
            ContactEmail: values.ContactEmail,
            CompilationId: values.CompilationId,
            Industry: values.Industry,
            Budget: values.Budget,
            Staffing: values.Staffing,
            Serves: values.Serves,
            Represent: values.Represent,
            ConsultingProject: values.ConsultingProject.join(','),
            Remark: values.Remark,
            gtp: recaptchaToken.value
        }
        // createResource(forms)
        const filteredValues = Object.fromEntries(
            Object.entries(forms).filter(([, value]) => value !== "")
        )
        createResource(filteredValues)
        // 處理表單提交
        // if (recaptchaVerified.value) {
        //     // 提交表單資料
        //     createResource(filteredValues)
        // } else {
        //     Swal.fire({
        //         title: '錯誤',
        //         text: '請完成 reCAPTCHA 驗證',
        //         icon: 'error',
        //         confirmButtonText: '確定',
        //     })
        // }
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
                            <div :class="{'requiredField' : errors.ContactEmail}">
                                <label for="ContactEmail" class="form-label"><span>*</span>電子信箱 Email</label>
                                <input type="email" id="ContactEmail" class="form-control" v-model.trim="ContactEmail" name="ContactEmail" placeholder="請輸入電子信箱 Email" />
                                <span class="text-alarm">{{ errors.ContactEmail }}</span>
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
                                    <option :value="item.value" v-for="item in jobTitleOptions" :key="item.text">{{ item.text }}</option>
                                </select>
                                <span class="text-alarm">{{ errors.JobTitle }}</span>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div :class="{'requiredField' : errors.CompilationId}">
                                <label for="CompilationId" class="form-label"><span>*</span>公司統一編號</label>
                                <input type="number" class="form-control" id="CompilationId" v-model="CompilationId" name="CompilationId" placeholder="請輸入公司統一編號" />
                                <span class="text-alarm">{{ errors.CompilationId }}</span>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div :class="{'requiredField' : errors.Industry}">
                                <label for="Industry" class="form-label"><span>*</span>行業別</label>
                                <select class="form-select" id="Industry" v-model="Industry" name="Industry">
                                    <option disabled value="">請選擇行業別</option>
                                    <option :value="item.value" v-for="item in industryOptions" :key="item.text">{{ item.text }}</option>
                                </select>
                                <span class="text-alarm">{{ errors.Industry }}</span>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div :class="{'requiredField' : errors.Budget}">
                                <label for="Budget" class="form-label"><span>*</span>資安預算</label>
                                <select class="form-select" id="Budget" v-model="Budget" name="Budget">
                                    <option disabled value="">請選擇資安預算</option>
                                    <option :value="item.value" v-for="item in budgetOptions" :key="item.text">{{ item.text }}</option>
                                </select>
                                <span class="text-alarm">{{ errors.Budget }}</span>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div :class="{'requiredField' : errors.Staffing}">
                                <label for="Staffing" class="form-label"><span>*</span>貴公司資安專責人編制</label>
                                <select class="form-select" id="Staffing" v-model="Staffing" name="Staffing">
                                    <option disabled value="">請選擇資安專責人編制</option>
                                    <option :value="item.value" v-for="item in staffingOptions" :key="item.text">{{ item.text }}</option>
                                </select>
                                <span class="text-alarm">{{ errors.Staffing }}</span>
                            </div>
                        </div>
                        <div class="col-12 mb-3 fs-6">諮詢項目</div>
                        <div class="col-md-6 mb-3">
                            <label for="Serves" class="form-label">資安法相關</label>
                            <select class="form-select" id="Serves" v-model="Serves" name="Serves">
                                <option disabled value="" >請選擇資安法相關</option>
                                <option :value="item.value" v-for="item in servesOptions" :key="item.text">{{ item.text }}</option>
                            </select>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="Represent" class="form-label">代理產品</label>
                            <select class="form-select" id="Represent" v-model="Represent" name="Represent">
                                <option disabled value="" >請選擇代理產品</option>
                                <option :value="item.value" v-for="item in representOptions" :key="item.text">{{ item.text }}</option>
                            </select>
                        </div>
                        <div class="col-12 mb-4">
                            <div class="form-check form-check-inline mb-3">
                                <input class="form-check-input" type="checkbox" id="FormItem1" v-model="ConsultingProject" value="1" name="ConsultingProject" />
                                <label class="form-check-label" for="FormItem1">詢問產品價格</label>
                            </div>
                            <div class="form-check form-check-inline mb-3">
                                <input class="form-check-input" type="checkbox" id="FormItem2" v-model="ConsultingProject" value="2" name="ConsultingProject" />
                                <label class="form-check-label" for="FormItem2">了解產品資訊</label>
                            </div>
                            <div class="form-check form-check-inline mb-3">
                                <input class="form-check-input" type="checkbox" id="FormItem3" v-model="ConsultingProject" value="3" name="ConsultingProject" />
                                <label class="form-check-label" for="FormItem3">索取相關活動</label>
                            </div>
                            <div class="form-check form-check-inline mb-3">
                                <input class="form-check-input" type="checkbox" id="FormItem4" v-model="ConsultingProject" value="4" name="ConsultingProject" />
                                <label class="form-check-label" for="FormItem4">預約 POC</label>
                            </div>
                            <div class="form-check mb-1">
                                <input class="form-check-input" type="checkbox" id="FormItem5" v-model="ConsultingProject" value="5" name="ConsultingProject" />
                                <label class="form-check-label" for="FormItem5">其他</label>
                            </div>
                            <div :class="{'requiredField' : errors.Remark}">
                                <textarea class="form-control" v-model="Remark" name="Remark" rows="3" placeholder="請輸入其他諮詢項目" :disabled="!ConsultingProject.includes('5')"></textarea>
                                <span class="text-alarm">{{ errors.Remark }}</span>
                            </div>
                        </div>
                        <div class="col-12 mb-6">
                            <Recaptcha @verified="onRecaptchaVerified" @expired="onRecaptchaExpired" />
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