import React from 'react';
import { Fictif } from '../Data/FictifComments';

const Comments = () => {
    return (
        <section className='comments w-full h-[500px] flex justify-center items-center '>
            <div className='text bg-white w-8/12 h-[450px] '>
                <div className='h-10 bg-slate-400 flex justify-center items-center'>
                    <h3 className='text-white font-bold'>COMMENTAIRES</h3>
                </div>
               {Fictif.map((comment) => (
                 <div className='flex justify-evenly mt-12'>
                 <div className='circle w-32 h-32 rounded-full bg-slate-300'>
                     <img className='circle w-32 h-32 rounded-full bg-slate-300' alt='' src={comment.profil} />
                 </div>
                 <div className='content-comments w-8/12 h-62 text-left p-5 bg-slate-300 rounded-2xl'>
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