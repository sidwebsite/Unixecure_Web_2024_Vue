<script setup>
    import { ref } from 'vue';
    import { useForm } from 'vee-validate'
    import * as yup from 'yup';
    import Swal from 'sweetalert2'
    import Recaptcha from '../RecaptchaComponents.vue'
    import router from '@/router'

    // validation schema
    const validationSchema = yup.object({
        Name: yup.string().required('此欄位不能為空白'),
        CompanyName: yup.string().required('此欄位不能為空白'),
        Email: yup.string().email('請輸入正確電子信箱格式').required('此欄位不能為空白'),
        Tel: yup.string()
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
        Department: yup.string().required('此欄位不能為空白'),
        JobTitle: yup.string().required('此欄位必須選擇職務'),
        CompilationId: yup.string().matches(/^\d{8}$/, '請輸入正確的統一編號8位數').required('此欄位不能為空白'),
        Industry: yup.string().required('此欄位必須選擇行業別'),
        Budget: yup.string().required('此欄位必須選擇資安預算'),
        Staffing: yup.string().required('此欄位必須選擇資安專責人編制'),
        Area: yup.string().required('此欄位必須選擇地區'),
        InformationChannel: yup.array().min(1, '訊息得知管道至少選擇一項'),
        SalesName: yup.string().when('InformationChannel', {
            is: (options) => options.includes('3'),
            then: validationSchema => validationSchema.required('此欄位必須填寫業務姓名'),
            otherwise: validationSchema => validationSchema.notRequired(),
        }),
        ElseInformationChannel: yup.string().when('InformationChannel', {
            is: (options) => options.includes('6'),
            then: validationSchema => validationSchema.required('此欄位不能為空白'),
            otherwise: validationSchema => validationSchema.notRequired(),
        }),
        Issue: yup.array().min(1, '有興趣的議題至少選擇一項'),
        ElseIssue: yup.string().when('Issue', {
            is: (options) => options.includes('7'),
            then: validationSchema => validationSchema.required('此欄位不能為空白'),
            otherwise: validationSchema => validationSchema.notRequired(),
        }),
        Agree: yup.boolean()
    })
    // 
    const { handleSubmit, resetForm, defineField, errors } = useForm({
        validationSchema,
        initialValues: {
            Name: '',
            CompanyName: '',
            Email: '',
            Tel: '',
            Department: '',
            JobTitle: '',
            CompilationId: '',
            Industry: '',
            Budget: '',
            Staffing: '',
            Area: '',
            InformationChannel: [],
            SalesName: '',
            ElseInformationChannel: '',
            Issue: [],
            ElseIssue: '',
            Agree: false
        }
    })
    // defineField
    const [Name] = defineField('Name')
    const [CompanyName] = defineField('CompanyName')
    const [Email] = defineField('Email')
    const [Tel] = defineField('Tel')
    const [Department] = defineField('Department')
    const [JobTitle] = defineField('JobTitle')
    const [CompilationId] = defineField('CompilationId')
    const [Industry] = defineField('Industry')
    const [Budget] = defineField('Budget')
    const [Staffing] = defineField('Staffing')
    const [Area] = defineField('Area')
    const [InformationChannel] = defineField('InformationChannel')
    const [SalesName] = defineField('SalesName')
    const [ElseInformationChannel] = defineField('ElseInformationChannel')
    const [Issue] = defineField('Issue')
    const [ElseIssue] = defineField('ElseIssue')
    const [Agree] = defineField('Agree')
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
    const staffingOptions = [
        {text: '1~3人', value: '1'},
        {text: '3~6人', value: '2'},
        {text: '6~10人', value: '3'},
        {text: '10人以上', value: '4'}
    ]
    // Area options
    const areaOptions = [
        {text: '台北市', value: '1'},
        {text: '新北市', value: '2'},
        {text: '基隆市', value: '3'},
        {text: '宜蘭縣', value: '4'},
        {text: '桃園市', value: '5'},
        {text: '新竹縣', value: '3'},
        {text: '新竹市', value: '7'},
        {text: '花蓮縣', value: '8'},
        {text: '苗栗縣', value: '9'},
        {text: '台中市', value: '10'},
        {text: '彰化縣', value: '11'},
        {text: '南投縣', value: '12'},
        {text: '雲林縣', value: '13'},
        {text: '嘉義縣', value: '14'},
        {text: '嘉義市', value: '15'},
        {text: '台南市',value:'16'},
        {text: '高雄市',value:'17'},
        {text: '屏東縣',value:'18'},
        {text: '台東縣',value:'19'},
        {text: '澎湖縣',value:'20'},
        {text: '金門縣',value:'21'},
        {text: '連江縣',value:'22'},
        {text: '中國', value: '23'},
        {text: '香港', value: '24'},
        {text: '其他', value: '25'},
    ]
    // 提交表單資料
    const createResource = async (values) => {
        try{
            const response = await fetch('/api/white_papers/insert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
            })
            if(response.ok) {
                await response.json();
                Swal.fire({
                    text: '表單成功送出',
                    icon: 'success',
                    confirmButtonText: '確定',
                    preConfirm: () => {
                        // 提交成功後清空表單
                        resetForm();
                        router.push({ name: 'statementsSuccess' })
                    }
                });
            } else {
                Swal.fire({
                    text: '表單送出失敗',
                    icon: 'error',
                    confirmButtonText: '確定',
                });
                throw new Error(`Error: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error:', error);
        } 
    }
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
    // Submit
    const onSubmit = handleSubmit((values) => {
        const forms = {
            Name: values.Name,
            CompanyName: values.CompanyName,
            Email: values.Email,
            Tel: values.Tel,
            Department: values.Department,
            JobTitle: values.JobTitle,
            CompilationId: values.CompilationId,
            Industry: values.Industry,
            Budget: values.Budget,
            Staffing: values.Staffing,
            Area: values.Area,
            InformationChannel: values.InformationChannel.join(','),
            SalesName: values.SalesName,
            ElseInformationChannel: values.ElseInformationChannel,
            Issue: values.Issue.join(','),
            ElseIssue: values.ElseIssue,
            gtp: recaptchaToken.value
        }
        // 過濾掉空值
        const filteredValues = Object.fromEntries(
            Object.entries(forms).filter(([, value]) => value !== "")
        )        
        // 處理表單提交
        if(values.Agree) {
            // reCAPTCHA 驗證
            if(recaptchaVerified.value) {
                createResource(filteredValues)
            } else {
                Swal.fire({
                    title: '錯誤',
                    text: '請完成 reCAPTCHA 驗證',
                    icon: 'error',
                    confirmButtonText: '確定',
                });
            }
        } else {
            Swal.fire({
                title: '警告',
                text: '請先同意條款才能提交',
                icon: 'warning',
                confirmButtonText: '確定',
            });
            return
        }
    })
</script>

<template>
    <div class="bg-gray-100-50 px-5 py-4 mb-6">
        <h4 class="text-center mb-3">欲獲得完整版《全域聯防終極指南》請留下您的資訊，將有專人與您聯繫。</h4>
        <form @submit.prevent="onSubmit">
            <!-- 聯絡人姓名 -->
            <div class="mb-4 mw-380">
                <div :class="{'requiredField' : errors.Name}">
                    <label for="Name" class="form-label"><span class="text-alarm">*</span>聯絡人姓名</label>
                    <input type="text" class="form-control" id="Name" v-model="Name" name="Name" placeholder="請輸入聯絡人姓名" />
                    <span class="text-alarm">{{ errors.Name }}</span>
                </div>
            </div>
            <!-- 公司名稱 -->
            <div class="mb-4 mw-380">
                <div :class="{'requiredField' : errors.CompanyName}">
                    <label for="CompanyName" class="form-label"><span class="text-alarm">*</span>公司名稱</label>
                    <input type="text" class="form-control" id="CompanyName" v-model="CompanyName" name="CompanyName" placeholder="請輸入聯絡人姓名" />
                    <span class="text-alarm">{{ errors.CompanyName }}</span>
                </div>
            </div>
            <!-- 電子信箱 Email -->
            <div class="mb-4 mw-380">
                <div :class="{'requiredField' : errors.Email}">
                    <label for="FormEmail" class="form-label"><span class="text-alarm">*</span>電子信箱 Email</label>
                    <input type="email" class="form-control" id="Email" v-model.trim="Email" name="Email" placeholder="請輸入電子信箱 Email" />
                    <span class="text-alarm">{{ errors.Email }}</span>
                </div> 
            </div>
            <!--  -->
            <div class="mb-4 mw-380">
                <div :class="{'requiredField' : errors.Tel}">
                    <label for="Tel" class="form-label"><span>*</span>聯絡電話（分機請加上#）</label>
                    <input type="text" id="Tel" class="form-control" v-model="Tel" name="Tel" placeholder="請輸入聯絡電話" />
                    <span class="text-alarm">{{ errors.Tel }}</span>
                </div>
            </div>
            <!-- 部門 -->
            <div class="mb-4 mw-380">
                <div :class="{'requiredField' : errors.Department}">
                    <label for="Department" class="form-label"><span>*</span>部門</label>
                    <select id="Department" class="form-select" v-model="Department" name="Department">
                        <option disabled value="">請選擇部門</option>
                        <option :value="item.value" v-for="item in departmentOptions" :key="item.text">{{ item.text }}</option>
                    </select>
                    <span class="text-alarm">{{ errors.Department }}</span>
                </div>
            </div>
            <!--  -->
            <div class="mb-4 mw-380">
                <div :class="{'requiredField' : errors.JobTitle}">
                    <label for="JobTitle" class="form-label"><span>*</span>職務</label>
                    <select id="JobTitle" class="form-select" v-model="JobTitle" name="JobTitle">
                        <option disabled value="">請選擇職務</option>
                        <option :value="item.value" v-for="item in jobTitleOptions" :key="item.text">{{ item.text }}</option>
                    </select>
                    <span class="text-alarm">{{ errors.JobTitle }}</span>
                </div>
            </div>
            <!-- 公司統一編號 -->
            <div class="mb-4 mw-380">
                <div :class="{'requiredField' : errors.CompilationId}">
                    <label for="CompilationId" class="form-label"><span>*</span>公司統一編號</label>
                    <input type="number" class="form-control" id="CompilationId" v-model="CompilationId" name="CompilationId" placeholder="請輸入公司統一編號" />
                    <span class="text-alarm">{{ errors.CompilationId }}</span>
                </div>
            </div>
            <!--  -->
            <div class="mb-4 mw-380">
                <div :class="{'requiredField' : errors.Industry}">
                    <label for="Industry" class="form-label"><span>*</span>行業別</label>
                    <select class="form-select" id="Industry" v-model="Industry" name="Industry">
                        <option disabled value="">請選擇行業別</option>
                        <option :value="item.value" v-for="item in industryOptions" :key="item.text">{{ item.text }}</option>
                    </select>
                    <span class="text-alarm">{{ errors.Industry }}</span>
                </div>
            </div>
            <!-- 貴公司資安預算 -->
            <div class="mb-4 mw-380">
                <div :class="{'requiredField' : errors.Budget}">
                    <label for="Budget" class="form-label"><span>*</span>貴公司資安預算</label>
                    <select class="form-select" id="Budget" v-model="Budget" name="Budget">
                        <option disabled value="">請選擇資安預算</option>
                        <option :value="item.value" v-for="item in budgetOptions" :key="item.text">{{ item.text }}</option>
                    </select>
                    <span class="text-alarm">{{ errors.Budget }}</span>
                </div>
            </div>
            <!-- 貴公司資安專責人編制 -->
            <div class="mb-4 mw-380">
                <div :class="{'requiredField' : errors.Staffing}">
                    <label for="Staffing" class="form-label"><span>*</span>貴公司資安專責人編制</label>
                    <select class="form-select" id="Staffing" v-model="Staffing" name="Staffing">
                        <option disabled value="">請選擇資安專責人編制</option>
                        <option :value="item.value" v-for="item in staffingOptions" :key="item.text">{{ item.text }}</option>
                    </select>
                    <span class="text-alarm">{{ errors.Staffing }}</span>
                </div>
            </div>
            <!-- 地區 -->
            <div class="mb-4 mw-380">
                <div :class="{'requiredField' : errors.Area}">
                    <label for="Area" class="form-label"><span>*</span>地區</label>
                    <select class="form-select" id="Area" v-model="Area" name="Area">
                        <option disabled value="">請選擇地區</option>
                        <option :value="item.value" v-for="item in areaOptions" :key="item.text">{{ item.text }}</option>
                    </select>
                    <span class="text-alarm">{{ errors.Area }}</span>
                </div>
            </div>
            <!-- 訊息得知管道（複選） -->
            <div class="mb-4">
                <label for="" class="form-label"><span class="text-alarm">*</span>訊息得知管道（複選）</label>
                <div class="form-check form-check-inline mb-3">
                    <input class="form-check-input" type="checkbox" id="message1" v-model="InformationChannel" value="1" name="InformationChannel">
                    <label class="form-check-label" for="message1">報章雜誌</label>
                </div>
                <div class="form-check form-check-inline mb-3">
                    <input class="form-check-input" type="checkbox" id="message2" v-model="InformationChannel" value="2" name="InformationChannel">
                    <label class="form-check-label" for="message2">展覽/研討會</label>
                </div>
                <div class="form-check form-check-inline mb-3">
                    <input class="form-check-input" type="checkbox" id="message3" v-model="InformationChannel" value="4" name="InformationChannel">
                    <label class="form-check-label" for="message3">社群網路</label>
                </div>
                <div class="form-check form-check-inline mb-3">
                    <input class="form-check-input" type="checkbox" id="message4" v-model="InformationChannel" value="5" name="InformationChannel">
                    <label class="form-check-label" for="message4">友人推薦</label>
                </div>
                <!-- 業務推薦 -->
                <div class="form-check mb-1">
                    <input class="form-check-input" type="checkbox" id="message5" v-model="InformationChannel" value="3" name="InformationChannel">
                    <label class="form-check-label" for="message5">業務推薦(請填寫業務姓名)</label>
                </div>
                <div class="mw-380 mb-3" :class="{'requiredField' : errors.SalesName}">
                    <input type="text" class="form-control" v-model="SalesName" name="SalesName" placeholder="請輸入推薦業務姓名" :disabled="!InformationChannel.includes('3')">
                    <span class="text-alarm">{{ errors.SalesName }}</span>
                </div>
                <!--  -->
                <div class="form-check mb-1">
                    <input class="form-check-input" type="checkbox" id="message6" v-model="InformationChannel" value="6" name="InformationChannel">
                    <label class="form-check-label" for="message6">其他</label>
                </div>
                <div :class="{'requiredField' : errors.ElseInformationChannel}">
                    <textarea class="form-control" v-model="ElseInformationChannel" name="ElseInformationChannel" rows="3" placeholder="請輸入其他得知管道" :disabled="!InformationChannel.includes('6')"></textarea>
                    <span class="text-alarm">{{ errors.ElseInformationChannel }}</span>
                </div>
                <span class="text-alarm">{{ errors.InformationChannel }}</span>
            </div>
            <!-- 有興趣的議題（複選） -->
            <div class="mb-4">
                <label for="" class="form-label"><span class="text-alarm">*</span>有興趣的議題（複選）</label>
                <div>
                    <div class="form-check form-check-inline mb-3">
                        <input class="form-check-input" type="checkbox" id="issue1" v-model="Issue" value="1" name="Issue">
                        <label class="form-check-label" for="issue1">資通安全法</label>
                    </div>
                    <div class="form-check form-check-inline mb-3">
                        <input class="form-check-input" type="checkbox" id="issue2" v-model="Issue" value="2" name="Issue">
                        <label class="form-check-label" for="issue2">資安法規監管</label>
                    </div>
                    <div class="form-check form-check-inline mb-3">
                        <input class="form-check-input" type="checkbox" id="issue3" v-model="Issue" value="3" name="Issue">
                        <label class="form-check-label" for="issue3">資安託管服務</label>
                    </div>
                </div>
                <div>
                    <div class="form-check form-check-inline mb-3">
                        <input class="form-check-input" type="checkbox" id="issue4" v-model="Issue" value="4" name="Issue">
                        <label class="form-check-label" for="issue4">數據安全</label>
                    </div>
                    <div class="form-check form-check-inline mb-3">
                        <input class="form-check-input" type="checkbox" id="issue5" v-model="Issue" value="5" name="Issue">
                        <label class="form-check-label" for="issue5">零信任</label>
                    </div>
                    <div class="form-check form-check-inline mb-3">
                        <input class="form-check-input" type="checkbox" id="issue6" v-model="Issue" value="6" name="Issue">
                        <label class="form-check-label" for="issue6">公司治理</label>
                    </div>
                </div>
                <div class="form-check mb-1">
                    <input class="form-check-input" type="checkbox" id="issue7" v-model="Issue" value="7" name="Issue">
                    <label class="form-check-label" for="issue7">其他</label>
                </div>
                <div :class="{'requiredField' : errors.ElseIssue}">
                    <textarea class="form-control" v-model="ElseIssue" name="ElseIssue" rows="3" placeholder="請輸入其他想了解的項目" :disabled="!Issue.includes('7')"></textarea>
                    <span class="text-alarm">{{ errors.ElseIssue }}</span>
                </div>
                <span class="text-alarm">{{ errors.Issue }}</span>
            </div>
            <!-- 客戶隱私權政策 -->
            <div class="mb-3">
                <div class="form-check form-check-inline mb-3">
                    <input class="form-check-input" type="checkbox" id="agree" v-model="Agree" name="Agree" value="">
                    <label class="form-check-label" for="agree">我同意</label>
                </div>
                <RouterLink to="/copyright" class="text-decoration-none mb-0">客戶隱私權政策</RouterLink>
                <span class="text-alarm">*</span>
            </div>
            <div class="mb-5">
                <Recaptcha 
                @verified="onRecaptchaVerified" 
                @expired="onRecaptchaExpired" />
            </div>
            <!--  -->
            <div class="text-center">
                <button type="submit" class="btn btn-contact">我要下載</button>
            </div>
        </form>
    </div>
</template>