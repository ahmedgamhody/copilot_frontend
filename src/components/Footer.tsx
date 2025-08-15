export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-primary text-white py-1 z-50">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between  ">
          <p> &copy; {currentYear} Copyright. ALL rights reserved.</p>
          <p>Engineered by Corelia</p>
        </div>
      </div>
    </div>
  );
}
