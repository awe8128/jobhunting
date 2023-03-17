import './UI/AboutMe.scss';
import Arrow from './Arrow';


const AboutMe =()=>{

    return(
        <>
        <div className='card'>
            <div className='About'>
                <div className='Chapter'>Chapter</div>
                <Arrow number={2}></Arrow>
                <div className='box135'>
                    <div className='numbox'>
                        <div className='num'>1</div>
                        <div className='numContent'>
                       
                            <div className='ContentBody'>
                            1. Born Raised
                            2. Japanese Style High School
                            3. Got a Scholarship
                            </div>
                            <div className='ContentHead'>
                                Mongolia
                            </div>
                        </div>
         
                    </div>
                    <div className='numbox'>
                    <div className='num'>3</div>
                        <div className='numContent'>
                        
                            <div className='ContentBody'>
                                1. Studied Hard<br></br>
                                2. Extended Scholarship<br></br>
                                3. Accepted in Uni
                            </div>
                            <div className='ContentHead'>
                                Fukui
                            </div>
                        </div>
                    </div>
                    <div className='numbox'>
                    <div className='num'>5</div>
                        <div className='numContent'>
              
                            <div className='ContentBody'>
                                1. IT or Mechanical Engineering<br></br>
                                2. Tokyo <br></br>
                                3. Work Hard<br></br>
                            </div>
                            <div className='ContentHead'>
                                Profession
                            </div>
                        </div>
                    </div>
                </div>
                <div className='box246'>
                    <div className='topnumbox'>
                        <div className='topnum'>2</div>
                        <div className='topnumContent'>
                            <div className='topnumHead'>
                               Tokyo, Japan
                            </div>
                        </div>
                        <div className='topnumBody'>
                            1. New Life <br></br>
                            2. New person<br></br>
                            3. New place <br></br>
                            </div>
                    </div>
                    <div className='topnumbox'>
                    <div className='topnum'>4</div>
                        <div className='topnumContent'>
                            <div className='topnumHead'>
                               Chiba, Japan
                            </div>
                        </div>
                        <div className='topnumBody'>
                            1. University Life<br></br>
                            2. New people<br></br>
                            3. Lots of Memory

                            </div>
                    </div>
                    <div className='topnumbox'>
                    <div className='topnum'>6</div>
                        <div className='topnumContent'>
                            <div className='topnumHead'>
                               Future, US?
                            </div>
                        
                        </div>
                        <div className='topnumBody'>
                            1. New place <br></br>    
                            2. New people <br></br>
                            3. Career 
                        </div>
                    </div>
                </div>
            </div>
        </div>

       
        </>
    )
    
}

export default AboutMe