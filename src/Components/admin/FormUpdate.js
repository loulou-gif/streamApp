import React from 'react';
import { FaCirclePlay } from "react-icons/fa6";
import { MdDeleteForever, MdAdd } from "react-icons/md";

const FormUpdate = () => {
    return (
        <div className=' mt-16 '>
            <div className='flex mt-10  h-[500px] '>
                <div className='w-5/12 h-full flex flex-col items-center justify-evenly'>
                    <div className='w-6/12 h-4/5  bg-gray-300'>
                        <img alt='Banner' className=''/>
                    </div>
                    <div className=' w-6/12 h-[15%] flex text-2xl text-white rounded-xl justify-center items-center bg-blue-600 duration-200 hover:duration-200 hover:bg-blue-800'>
                        <input type='file' className='absolute  opacity-0 cursor-pointer' />
                        <span>Télécharger l'affiche</span>
                    </div>
                </div>
                <form className='w-7/12 flex-col flex justify-evenly h-full '>
                    <div className='flex justify-evenly w-full'>
                        <input className='w-5/12 h-[60px] rounded-xl p-5 outline-blue-300' placeholder="Nom de l'anime"/>
                        <input className='w-5/12 h-[60px] rounded-xl p-5 outline-blue-300' type='date'/>
                    </div>
                    <div className='flex justify-evenly w-full'>
                        <input className='w-5/12 h-[60px] rounded-xl p-5 outline-blue-300' placeholder="Auteurs"/>
                        <input className='w-5/12 h-[60px] rounded-xl p-5 outline-blue-300' placeholder="Réalisations"/>
                    </div>
                    <div className='flex justify-evenly w-full'>
                    <select className='w-5/12 h-[60px] rounded-xl p-5 outline-blue-300' defaultValue="Durée">
                            <option value="duréé" >Durée</option>
                            <option value="">24 minutes</option>
                            <option value="">50 minutes</option>
                        </select>
                        <select className='w-5/12 h-[60px] rounded-xl p-5 outline-blue-300' defaultValue="Genre">
                            <option value="Genre" >Genre</option>
                            <option value='' >ISEKAI</option>
                            <option value='' >AVENTURE</option>
                            <option value='' >EICHII</option>
                        </select>
                    </div>
                </form>
            </div>
            <div className='flex mt-10  h-[350px] '>
                <div className='w-5/12 h-full flex flex-col items-center justify-evenly'>
                    <div className='w-8/12 h-2/5  bg-gray-300'>
                        <img alt='poster' className='w-full'/>
                    </div>
                    <div className=' w-8/12 h-1/5 flex text-2xl text-white rounded-xl justify-center items-center bg-green-600 duration-200 hover:duration-200 hover:bg-green-800'>
                        <input type='file' className='absolute  opacity-0 cursor-pointer' />
                        <span>Télécharger la banner</span>
                    </div>
                </div>
                <form className='w-7/12 flex-col flex justify-evenly h-full '>
                    <div className='flex justify-evenly w-full'>
                        <textarea className='w-5/12 h-[120px] rounded-xl p-5 outline-blue-300' placeholder="Synopsys"></textarea>
                        <select className='w-5/12 h-[60px] rounded-xl p-5 outline-blue-300' defaultValue='licence' >
                            <option value="licence">Licence</option>
                            <option >VOSTFR</option>
                            <option >VF</option>
                            <option >VO</option>
                        </select>
                    </div>
                    <div className='flex justify-evenly w-full'>
                        <select className='w-5/12 h-[60px] rounded-xl p-5 outline-blue-300' defaultValue='Episode'>
                            <option value='Episode'>Episode</option>
                            <option >Episode 01</option>
                            <option >Episode 02</option>
                            <option >Episode 03</option>
                            <option >Episode 04</option>
                            <option >Episode 05</option>
                            <option >Episode 06</option>
                            <option >Episode 07</option>
                            <option >Episode 08</option>
                            <option >Episode 09</option>
                            <option >Episode 10</option>
                            <option >Episode 11</option>
                            <option >Episode 12</option>
                            <option >Episode 13</option>
                            <option >Episode 14</option>
                            <option >Episode 15</option>
                            <option >Episode 16</option>
                            <option >Episode 17</option>
                            <option >Episode 18</option>
                            <option >Episode 19</option>
                            <option >Episode 20</option>
                            <option >Episode 21</option>
                            <option >Episode 22</option>
                            <option >Episode 23</option>
                            <option >Episode 24</option>
                        </select>
                        <select className='w-5/12 h-[60px] rounded-xl p-5 outline-blue-300' defaultValue='type'>
                            <option value="type">Type</option>
                            <option >Long métrage</option>
                            <option >Court métrage</option>
                            <option >Série</option>
                        </select>
                    </div>
                    {/* <div className='flex justify-evenly w-full'>
                        <select className='w-5/12 h-[60px] rounded-xl p-5 outline-blue-300' >
                            <option selected>Durée</option>
                            <option >24 minutes</option>
                            <option >50 minutes</option>
                        </select>
                        <select className='w-5/12 h-[60px] rounded-xl p-5 outline-blue-300' >
                            <option selected>Genre</option>
                            <option >ISEKAI</option>
                            <option >AVENTURE</option>
                            <option >EICHII</option>
                        </select>
                    </div> */}
                </form>
            </div>
            <div className='flex mt-10 h-[500px]'>
                <div className='w-full h-full flex flex-col items-center justify-evenly'>
                    <div className='w-8/12 h-4/5 flex items-center justify-center bg-black'>
                        <FaCirclePlay className='icone-play text-6xl text-gray-400'><video alt='Banner' className='h-full w-full'></video></FaCirclePlay>
                    </div>
                    <div className=' w-8/12 h-[15%] flex text-2xl text-white rounded-xl justify-center items-center bg-red-600 duration-200 hover:duration-200 hover:bg-red-800'>
                        <input type='file' className='absolute  opacity-0 cursor-pointer' />
                        <span>Télécharger l'épisode</span>
                    </div>
                </div>
            </div>
            <div className='flex h-[100px]'>
                <div className='w-full h-full flex  items-center justify-center'>
                    <div className=' w-3/12 m-5 h-4/5 flex text-2xl text-white rounded-xl justify-center items-center bg-blue-600 duration-200 hover:duration-200 hover:bg-blue-800'>
                        <input type='submit' className='absolute  opacity-0 cursor-pointer' />
                        <span><MdAdd className='text-5xl'/> ENREGISTRER</span>
                    </div>
                    <div className=' w-3/12 m-5 h-4/5 flex text-2xl text-white rounded-xl justify-center items-center bg-red-600 duration-200 hover:duration-200 hover:bg-red-800'>
                        <input type='submit' className='absolute  opacity-0 cursor-pointer' />
                        <span><MdDeleteForever className='text-5xl'/> ANNULER</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormUpdate;