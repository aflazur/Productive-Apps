import logo from "../assets/logo.png"

export default function LoadingSpinner() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
     
        <p className="text-gray-500 text-4xl font-bold flex gap-2">L<img className="animate-spin w-10 h-10" src={logo} alt="" /> oading...</p>
      
    </div>
  )
}