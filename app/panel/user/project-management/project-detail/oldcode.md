      <div className="mt-10 lg:mt-0">
        {projectCurrentState ? (
          ProjectDetailNav.includes(projectCurrentState) ? (
            <ul className="grid grid-cols-7 justify-between bg-[#4866CE] text-white text-center rounded-t-2xl overflow-hidden">
              {ProjectDetailNav.map((item, index) => (
                <li key={index} className={`${item === projectCurrentState ? "bg-[#EAEFF6] text-[#4866CE]" : ""}  p-5  border border-[#4866CE]`} >
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="bg-[#4866CE] text-white text-center rounded-t-2xl overflow-hidden">
              {projectDetail.title}
            </p>
          )
        ) : (
          <p className="bg-[#4866CE] text-white text-center rounded-lg py-6 overflow-hidden">
            وضعیتی یافت نشد.
          </p>
        )}
      </div>