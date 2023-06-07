import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
    return (
        <div>
            <Carousel className='text-center'>
                <div className="relative">
                    <img src="https://img.freepik.com/free-photo/professional-camera-blurred_169016-10249.jpg?size=626&ext=jpg&uid=R96983164&ga=GA1.2.1036415892.1686067910&semt=ais" alt="Banner 1" />
                    {/* <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white ">Unleash Your Creativity, Capture the World: <br /> Join Our Summer School Photography Camp!</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Button 1</button> */}

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center">
                            <p className="mb-4 text-3xl">Unleash Your Creativity, Capture the World: <br /> Join Our Summer School Photography Camp!</p>
                            <button className="btn btn-info hover:bg-blue-600 text-white  ">Explore more</button>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src="https://img.freepik.com/free-photo/close-up-view-male-hand-holding-professional-camera-street_8353-6510.jpg?size=626&ext=jpg&uid=R96983164&ga=GA1.2.1036415892.1686067910&semt=sph" alt="Banner 1" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center">
                            <p className="mb-4 text-3xl">Summer School Adventures in Photography: <br /> Where Lifelong Memories and Skills Are Developed.</p>
                            <button className="btn btn-info hover:bg-blue-600 text-white  ">Explore more</button>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src="https://img.freepik.com/free-photo/young-male-photographer-hat-taking-picture-sitting-field_176420-4517.jpg?size=626&ext=jpg&uid=R96983164&ga=GA1.2.1036415892.1686067910&semt=ais" alt="Banner 1" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-black text-center">
                            <p className="mb-4 text-3xl">Discover the Magic of Photography: <br /> Enroll in our Inspiring Summer School Photography Program.</p>
                            <button className="btn btn-info hover:bg-blue-600 text-white  ">Explore more</button>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src="https://img.freepik.com/free-photo/silhouette-photographer-setting-up-camera-shoot-sea-clouds-during-sunset_181624-58453.jpg?size=626&ext=jpg&uid=R96983164&ga=GA1.2.1036415892.1686067910&semt=ais" alt="Banner 1" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-inherit text-center">
                            <p className="mb-4 text-3xl">Transform Your Summer Break: <br /> Join our Photography School Camp and Learn to Tell Stories Through Captivating Images.</p>
                            <button className="btn btn-info hover:bg-blue-600 text-white  ">Explore more</button>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src="https://i.ibb.co/RbqMmbS/camera-514992-640.jpg" alt="Banner 1" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center">
                            <p className="mb-4 text-3xl">Where Art Meets Adventure: Summer School Photography Camp for Explorers of Visual Expression.</p>
                            <button className="btn btn-info hover:bg-blue-600 text-white  ">Explore more</button>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src="https://img.freepik.com/free-photo/woman-viewing-photos-camera_335224-745.jpg?size=626&ext=jpg&uid=R96983164&ga=GA1.1.1036415892.1686067910&semt=ais" alt="Banner 1" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center">
                            <p className="mb-4 text-3xl">Discover the Magic of Photography: Enroll in our Inspiring Summer School Photography Program.</p>
                            <button className="btn btn-info hover:bg-blue-600 text-white  ">Explore more</button>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;