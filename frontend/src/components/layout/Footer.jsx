import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="container bg-black text-white w-full py-12">
        <div className="flex justify-between flex-row w-4/5 mx-auto h-full">
          <div className="flex justify-start flex-col">
            <p className="text-xl font-medium">Shoppy</p>
            <p className="my-2">Subscribe</p>
            <p className="my-2">Get 10% off your first order</p>
          </div>

          <div className="flex justify-between flex-col">
            <p className="text-xl font-medium"> Support</p>
            <p className="my-2">
              Dx, 71/1,New Colony, <br />
              Palwal-India (121102)
            </p>
            <p className="my-2">robinmandhotia@gmail.com</p>
            <p className="my-2">+91 0306646417</p>
          </div>

          <div className="flex justify-between flex-col">
            <p className="text-xl font-medium">Account</p>
            <p>My Account</p>
            <p>
              <Link href="/login">Login</Link> /{" "}
              <span>
                <Link href="/signup">Register</Link>
              </span>
            </p>
            <p>Cart</p>
            <p>Shop</p>
          </div>

          <div className="flex justify-between flex-col">
            <p className="text-xl font-medium"> Quick Link</p>
            <p className="my-2">Privacy Policy</p>
            <p className="my-2">Terms of Use</p>
            <p className="my-2">FAQ</p>
            <p className="my-2">Contact</p>
          </div>

          <div className="flex justify-between flex-col">
            <p className="text-xl font-medium">Social Media</p>
            <p className="my-2">Facebook</p>
            <p className="my-2">Instagram</p>
            <p className="my-2">Linkedin</p>
            <p className="my-2">Github</p>
          </div>
        </div>
      </div>
      <div className=" bg-black text-gray-500 text-center p-3 ">
        @ Copyright Robin 2024. All right reserved
      </div>
    </>
  );
}
