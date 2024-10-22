export default function Forms() {
    return (
      <div>
        <h1 className="text-3xl font-semibold text-center uppercase mt-2">enter your details</h1>

<div>
<form className="flex gap-5 justify-center flex-col items-center mt-6">

    <input className="border-red-800 w-2/6 border rounded-xl p-2 text-center" 
    placeholder="Enter your Name.."/>
    <input type="password" className="border-red-800 w-2/6 border rounded-xl p-2 text-center" 
    placeholder="Enter your Password.."/>
    <input type="email" className="border-red-800 w-2/6 border rounded-xl p-2 text-center" 
    placeholder="Enter your Email.." />

    <button className="bg-blue-800 text-white py-3 px-8 rounded-lg">Place your Order</button>
</form>
</div>

      </div>
    );
  }