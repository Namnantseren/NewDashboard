import { useNavigate } from 'react-router-dom'
import './Dside/Dside.css'

export default function Dside() {
    const jump = useNavigate();
    // function monitor(){
    //     jump(`/Dashboard/Orders`)
    // }
    
    return(
        <div className='m-side'>
            <div className='container'>
                <div className='topofmonitor'></div>
                <button className='d-flex sideOption monitor' onClick={() => jump(`/Dashboard/AllDash`)}>
                    <img src="../img/./fmonitor.svg" alt="pic" />
                    <p className='sideword'>Хянах самбар</p>
                </button>
                <button className='d-flex sideOption' onClick={() => jump(`/Dashboard/Product`)}>
                    <img src="../img/./file.svg" alt="pic" />
                    <p className='sideword'>Бүтээгдэхүүнүүд</p>
                </button>
                <button className='d-flex sideOption' onClick={() => jump(`/Dashboard/Orders`)}>
                    <img src="../img/./fusers.svg" alt="pic" />
                    <p className='sideword'>Захиалгууд</p>
                </button>
                <button className='d-flex sideOption' onClick={() => jump(`/Dashboard/Users`)}>
                    <img src="../img/./fbag.svg" alt="pic" />
                    <p className='sideword'>Хэрэглэгчид</p>
                </button>
                <button className='d-flex sideOption' onClick={() => jump(`/Dashboard/Moderator`)}>
                    <img src="../img/./fmonitor.svg" alt="pic" />
                    <p className='sideword'>Модератор</p>
                </button>
                <button className='d-flex sideOption' onClick={() => jump(`/Dashboard/Settings`)}>
                    <img src="../img/./fwrench.svg" alt="pic" />
                    <p className='sideword'>Тохиргоо</p>
                </button>
            </div>
        </div>
    )
}