import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './../components/header'

const products = [
    {
      id: 1,
      name: 'Description',
      imageSrc: `${process.env.PUBLIC_URL}images/uc8_logo.png`,
      imageAlt: "logo",
      description: 'UC8 IPPBX Phone System<br><br>UC8 Hosted IPPBX Phone System<br><br>Telephone Number<br><br>Unlimited Calling Lines<br><br>Help Desk Support',
    },
    {
        id: 2,
        name: '',
        imageSrc: `${process.env.PUBLIC_URL}images/phone_system.png`,
        imageAlt: "",
        description: '',
      },
      {
        id: 3,
        name: '',
        imageAlt: "",
        description: '<div style={{ color: "#a020ef" }}><p>Plan</p></div>',
      },
    // More products...
  ]
  
  export default function HostedPhoneSystem() {
    const history = useHistory();

    return (
      <div className="bg-white p-12">
      <Header />
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className='flex items-center'>
                <div className='w-10 h-10 border border-solid rounded-full text-white bg-[#56077c] flex justify-center items-center mr-5'>
                    <h1 className='text-2xl font-extrabold font-mono'>2</h1>
                </div>
                <div className='text-2xl text-gray-500 font-semibold'>Hosted phone system</div>
            </div>
    
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-5">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-100">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex justify-around">
                  <div>
                    <h3 className="text-[#a020ef] text-xl font-bold text-center">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                    </h3>
                    {product.id === 3 ? (
                        <div className='flex'>
                            <div>
                                <p className='text-[#a020ef] text-center'>Plan</p>
                                <p className='text-gray-500 text-center'>Code</p>
                                <p className='w-24 bg-gray-100 text-gray-500 text-center'>H100</p>
                            </div>
                            <div>
                                <p className='text-[#a020ef] text-center'>Price</p>
                                <p className='text-gray-500 text-center'>Per Month</p>
                                <p className='w-24 bg-gray-100 text-[#a020ef] text-center font-semibold'>$39</p>
                            </div>
                        </div>
                        
                    ) : (      
                        <div className='mt-5 text-gray-500' dangerouslySetInnerHTML={{ __html: product.description }} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
            <div className="mt-5 flex justify-end">
            <button
                onClick={() => history.push(`/`)}
                style={{borderRadius:'1.75rem'}}
                className="flex items-center justify-center w-44 h-10 rounded-full border border-[#a020ef] bg-white text-[#a020ef] mr-5"
            >
                Previous
            </button>
            <button
                onClick={() => history.push(`/equipment`)}
                style={{borderRadius:'1.75rem'}}
                className="flex items-center justify-center w-44 h-10 rounded-full border bg-[#a020ef] text-white"
            >
                Next
            </button>
            </div>
        </div>
      </div>
    )
  }
  