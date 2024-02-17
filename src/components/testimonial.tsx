import { Button } from "./ui/button";

const Testimonial = () => {
    return (
        <div className="h-[600px] bg-[#000235] text-white">
            <div className="text-center p-10">
                <h5 className="text-3xl mb-4">Testimonials</h5>
                <h1 className="font-semibold text-4xl">Read what have others to say</h1>
                <div className="flex max-w-5xl gap-8 mx-auto group mt-16">
                    <div className="bg-black/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
                        <h4 className="uppercase text-xl font-bold">John Doe</h4>
                        <p className="text-sm leading-7 my-3 font-light opacity-50">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <Button className="">
                                Get in Touch
                            </Button>
                    </div>
                    <div className="bg-black/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
                        <h4 className="uppercase text-xl font-bold">John Doe</h4>
                        <p className="text-sm leading-7 my-3 font-light opacity-50">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <Button className="">
                                Get in Touch
                            </Button>
                    </div>
                    <div className="bg-black/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
                        <h4 className="uppercase text-xl font-bold">John Doe</h4>
                        <p className="text-sm leading-7 my-3 font-light opacity-50">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <Button className="">
                                Get in Touch
                            </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;