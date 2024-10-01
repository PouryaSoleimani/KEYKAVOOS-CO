import app from '@/services/service'
import { NextPage, GetStaticProps } from 'next'
import BackButton from '../../components/BackButton'
import { FormEvent, useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { Bounce, toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

interface Props { }
type Inputs = { user_id: string | number, departments: string, brands: string, text: string }
//^COMPONENT =======================================================================================================================================================================================
const NewPlacardNew: NextPage<Props> = ({ }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
    //^ STATES
    const TOKEN = JSON.parse(sessionStorage.getItem('token') as string)
    const [allUsers, setAllusers] = useState([])
    const [allDepartments, setAllDepartmens] = useState([])
    const [allBrands, setAllBrands] = useState([])
    // &INPUT VALUES
    const [userInputValue, setUserInputValue] = useState("")
    const [departmentInputValue, setDepartmenInputValue] = useState("")
    const [brandInputValue, setBrandInputValue] = useState("")
    const router = useRouter()
    //^ FETCH FUNCTIONS
    function getUsers() { app.get('/users').then(response => setAllusers(response.data.data)) }
    function getDepartments() { app.get('/departments').then(response => setAllDepartmens(response.data.data)) }
    function getBrands() { app.get('/brands').then(response => setAllBrands(response.data.data)) }
    useEffect(() => { getUsers(); getDepartments(); getBrands(); }, [])


    //^ FORM SUBMIT 
    const notifSubmitHandler: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        app.post("/notification/user/store", data)
            .then(response => {
                console.log(response);
                if (response.status === 200) { toast.success('نوتیفیکیشن با موفقیت ارسال شد.', { style: { fontSize: "14px" }, hideProgressBar: true }) }
            })
            .catch((error: any) => {
                console.log(error.response.data);
                toast.error("خطا در ارسال نوتیفیکیشن", { style: { fontSize: "14px" }, hideProgressBar: true })
            })
            .finally(router.back)
    }

    //^ RETURN
    return (
        <div>
            <form onSubmit={handleSubmit(notifSubmitHandler)}>
                {/*//& DROPDOWNS */}
                <h2 className='py-6 text-black'>ایجاد اعلان به :</h2>
                <div id="DROPDOWNS" className='grid grid-cols-3 place-items-stretch w-full'>
                    {/*//~ USERS */}
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">کاربران</span>
                        </div>
                        <select className="select select-bordered bg-zinc-100 text-zinc-700" defaultValue="کاربر مد نظر" {...register("user_id")}>
                            <option disabled selected defaultChecked></option>
                            {allUsers.length && allUsers.map((item: any) => (
                                <option value={item.id}>{item.name} {item.surname}</option>
                            ))}
                        </select>
                    </label>
                    {/*//~ DEPARTMENTS */}
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">دپارتمان ها</span>
                        </div>
                        <select className="select select-bordered bg-zinc-100 text-zinc-700" defaultValue="کاربر مد نظر" {...register("departments")}>
                            <option disabled selected defaultChecked></option>
                            {allDepartments.length && allDepartments.map((item: any) => (
                                <option value={item.department.id}>{item.department.name_fa}</option>
                            ))}
                        </select>
                    </label>
                    {/*//~ BRANDS */}
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">برند ها</span>
                        </div>
                        <select className="select select-bordered bg-zinc-100 text-zinc-700" defaultValue="کاربر مد نظر" {...register("brands")}>
                            <option disabled selected defaultChecked></option>
                            {allBrands.length && allBrands.map((item: any) => (
                                <option value={item.brand.id}>{item.brand.title}</option>
                            ))}
                        </select>
                    </label>
                </div>
                {/*//~ TEXT AREA */}
                <div id="NOTIFICATION__TEXT">
                    <label className="form-control py-8 my-8">
                        <div className="label">
                            <span className="label-text text-black text-md font-thin">متن اعلان :</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24  bg-zinc-100 text-zinc-700" placeholder="متن مورد نظر خود را بنویسید" {...register("text", { required: true })}></textarea>
                        {errors.text && <p className='text-red-800 text-sm pr-2'>وارد کردن متن اعلان الزامی است</p>}
                    </label>
                </div>
                {/*//* SUBMIT BUTTON */}
                <div className='w-full flex items-center justify-end'>
                    <button type='submit' className="btn bg-[#4866CF] hover:bg-blue-800 duration-300 text-white border-none font-thin">ثبت و ارسال اعلان</button>
                </div>
            </form>
        </div>
    )
}


export default NewPlacardNew