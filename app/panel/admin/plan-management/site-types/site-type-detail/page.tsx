"use client"
import { getBrandDetail } from '@/utils/utils';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import BackButton from '../../../../../../components/ADMIN__PANEL__COMPONENTS/BackButton';
import app from '@/services/service';

function SiteTypesDetail() {
  const params = useSearchParams();
  const id = params.get("id") as string | number;
  const [brandDetail, setBrandDetail] = useState({ title: "", description: "", });
  function getSingleSiteTypeDetail() {
    app.get(`/type/show/${Number(id)}`).then(response => console.log("TYPE DETAILS", response.data))
  }
  // useEffect(() => { getBrandDetail(id, setBrandDetail) }, []);

  useEffect(() => {
    console.log("ID =>", id)
    getSingleSiteTypeDetail()
  }, []);


  //^ RETURN _________________________________________________________________________________________________________________________________
  return (
    <>
      <div className='w-full flex items-center justify-end py-1'>
        <BackButton />
      </div>
      <div className="bg-white shadow mx-auto rounded-lg w-full py-2 px-4 text-center">
        <div className="grid grid-cols-2">
          <div>نام طراحی</div>
          <div>توضیحات</div>
        </div>

        <div className="grid grid-cols-2 py-3 bg-[#EAEFF6] rounded-[4px] cursor-pointer my-6">
          <p className='text-xl'>{brandDetail.title}</p>
          <p className='text-xl'>{brandDetail.description}</p>
        </div>
      </div>
    </>
  )
}

export default SiteTypesDetail