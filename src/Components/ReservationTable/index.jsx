import React from "react";

function ReservationTable(){
    return(
        <>
        <div className="pt-20 md:pt-40 px-0 lg:px-15 sm:px-6 md:px-10">
          <div className="max-w-[1420px] mx-auto flex flex-col md:flex-row justify-center gap-8 py-10 px-5">
            <div className="w-full  xl:w-1/2 lg:w-1/2 "
           
            >
    
            <img className="w-full h-full object-cover rounded-3xl"
            src="https://framerusercontent.com/images/gtfNF6fHZZkq8OHRrEbbPyCBcVA.webp?scale-down-to=1024"/>
            </div>
            <div
className="w-full lg:w-1/2  lg:px-7 xl:w-2/3 rounded-3xl xl:p-10 md:px-3  p-10 bg-black"
  // style={{ boxShadow: "0 20px 60px rgba(193, 252, 16, 0.73)" }}
  style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.6), 0 0 30px rgba(204, 247, 74, 0.7)"
 }}


>
            <h2 className="text-4xl font-bold py-3 text-white">Book a Table</h2>
            <p className="text-md font-medium py-3 text-white">Book your table and savor the authentic taste of India in the heart of Patty. 
                We look forward to welcoming you to an unforgettable dining experience!</p>
          <div className="max-w-3xl mx-auto py-8 px-0 md:px-0 xl:px-3 lg:px-0">
  {/* <h2 className="text-4xl font-semibold mb-8 text-center">Book a Table</h2> */}
  
  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium mb-1  text-white">Name</label>
      <input type="text" id="name" placeholder="Jane Smith" className="text-[#f3ffcf] w-full border border-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#f3ffcf]" />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium mb-1  text-white">Email</label>
      <input type="email" id="email" placeholder="jane@patty.com" className="text-[#f3ffcf] w-full border border-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#f3ffcf]" />
    </div>

    <div>
      <label htmlFor="number" className="block text-sm font-medium mb-1  text-white">Phone Number</label>
      <input type="tel" id="number"  placeholder="+420 123 456 789" className="w-full border border-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#f3ffcf] text-[#f3ffcf]" />
    </div>

    <div>
      <label htmlFor="people" className="block text-sm font-medium mb-1  text-white">People</label>
      <input type="number" id="people" placeholder="1-10" className="text-[#f3ffcf] w-full border border-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#f3ffcf]" />
    </div>

    <div>
      <label htmlFor="date" className="block text-sm font-medium mb-1  text-white">Date</label>
      <input type="date" id="date" className="text-[#f3ffcf] w-full border border-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#f3ffcf]" />
    </div>

    <div>
      <label htmlFor="time" className="block text-sm font-medium mb-1  text-white">Time</label>
      <input type="time" id="time" className="text-[#f3ffcf] w-full border border-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#f3ffcf]" />
    </div>
    
    <div className="md:col-span-2 mt-4">
      <button type="submit"   className="w-full text-[#f3ffcf] bg-transparent border border-[#f3ffcf] py-3 rounded-md text-lg hover:bg-[#cfff3f] hover:text-black transition duration-300 cursor-pointer"

       >
        Make Reservation</button>
    </div>
  </form>

<div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
  <a
    href="#"
    className="w-full sm:w-1/2 text-[#f3ffcf] bg-transparent border border-[#f3ffcf] px-6 py-2 rounded-md hover:bg-[#f3ffcf] hover:text-black hover:border-[#f3ffcf] transition duration-300 text-center"
  >
    Instagram
  </a>

  <a
    href="#"
    className="w-full sm:w-1/2 text-black bg-[#ccf74a] px-6 py-2 rounded-md hover:bg-white transition duration-300 text-center"
  >
    Facebook
  </a>
</div>


</div>

            </div>
            </div>
        </div>
        </>
    )
}
export default ReservationTable