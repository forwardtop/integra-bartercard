
  const stats = [
    { name: 'For over 25 years UC8 technologies R&D department and engineers have developed and refined one of the world’s most powerful business phone system platforms. UC8 is powerful and highly affordable.', value: 'Why UC8' },
    { name: 'As UC8 IPPBX is a hosted platform, you do not need to buy expensive on-premise phone system hardware. With UC8 you can connect with as little as one telephone extension, simply add phone extensions as and when you need. No more expensive calling lines with “UC8 multi-line” this means you can receive multiple inbound and outbound calls simultaneously rather than restricted line-based systems, you are only limited by the size of your Internet connection.', value: 'Saving' },
    { name: 'This is a feature rich phone system delivering high performance to your business. If you have multiple branch offices or staff who work from home, UC8 supports “multi-site” as a standard feature. If you operate more than one company or entity, we have got you covered with “Multi-tenant”, also a standard feature.', value: 'Multi-Site' },
  ]
  
  export default function AboutUs() {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">UC8 Benefits</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            Your business calls are made over your broadband Internet connection, but at a fraction of the cost.
            VoIP is easy to set up and you can keep your current telephone numbers. 
            UC8 is an open platform which means you are not locked into proprietary hardware. 
            You can use any IP compatible hardware or software with UC8.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            With UC8 you can connect with compatible IP desktop, conference and cordless handsets, 
            if you need video, we have you covered with UC8 softphone which is compatible with Windows 
            & Mac devices, UC8 also works with IP video desktop phones and IP VC Systems. If you 
            need mobility, stay connected with our UC8 softphone for mobiles and smart devices, IOS 
            and Android compatible.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  