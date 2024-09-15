import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Tutoring() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
        {data.map((d) => (
          <div className="bg-white h-[450px] text-black rounded-xl" key={d.name}>
            <div className="h-56 rounded-t-xl bg-gray-700 flex justify-center items-center">
              <img src={d.img} alt={d.name} className="h-44 w-44 rounded-full"/>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 p-4">
              <p className="text-xl font-semibold">{d.name}</p>
              <p>{d.desc}</p>
              <p><strong>Phone:</strong> {d.phone}</p>
              <p><strong>Email:</strong> {d.email}</p>
          </div>
      </div>
        ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: 'Aditya Sunke',
    img: 'https://media.licdn.com/dms/image/v2/D4E03AQHX3oDB3Si6XQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699066357980?e=1732147200&v=beta&t=HwcDBi5_xqMI-LuKJz7qky_lDQeDpevXxNXzg1kH0Vo',
    desc: 'MATH 2114',
    phone: '123-456-7890',
    email: 'aditya.math@vt.edu'
  },
  {
    name: 'Sankalp Dasari',
    img: 'https://media.licdn.com/dms/image/v2/D4E03AQFfi9qvu9dcug/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699043281268?e=1732147200&v=beta&t=PmqFM0_0ss2pvSuocU5ZEcswY6GojIu1fF9pXLzkHvA',
    desc: 'CS 2114',
    phone: '987-654-3210',
    email: 'sankalp.cs@vt.edu'
  },
  {
    name: 'Ishaan Jain',
    img: 'https://media.licdn.com/dms/image/v2/D5603AQG_cM8wmV7bmQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726172144592?e=1732147200&v=beta&t=LtuCARNGvdqSkizp2V_nbtxEJAYWaHI5C04iKxAhh6o',
    desc: 'PHYS 2306',
    phone: '456-789-1234',
    email: 'ishaan.phys@vt.edu'
  },
  {
    name: 'Shriram Anand',
    img: 'https://media.licdn.com/dms/image/v2/D5603AQFSbdcgvrR1gw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699033010572?e=1732147200&v=beta&t=9RwymD_jamlKY0IG8cq-jyKx1tspm4TM7i6Wg0WIAng',
    desc: 'IE 1001',
    phone: '321-654-0987',
    email: 'shriram.ie@vt.edu'
  },
];

export default Tutoring;
