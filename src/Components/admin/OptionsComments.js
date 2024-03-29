import React from 'react';
import { Fictif } from '../../Data/FictifComments';

const Comments = () => {
    return (
        <section className='comments w-full h-[400px] mt-10 flex justify-center items-center '>
            <div className='text bg-white w-8/12 pb-5 '>
                <div className='h-10 bg-slate-400 flex justify-center items-center'>
                    <h3 className='text-white font-bold'>COMMENTAIRES</h3>
                </div>
               {Fictif.map((comment) => (
                 <div className='flex justify-evenly mt-12 -p10'>
                    <div className='circle w-16 h-16 rounded-full bg-slate-300'>
                        <img className='circle w-16 h-16 rounded-full bg-slate-300' alt='' src={comment.profil} />
                    </div>
                    <div className='content-comments w-8/12 h-20 text-left p-5 bg-slate-300 rounded-2xl'>
                        {comment.message}
                    </div>
                </div>
               ))}
            </div>
            {/* <div className='bg-black h-[300px] w-full '>
                <form className=''>

                </form>
            </div> */}
        </section>
    );
};

export default Comments;