import React from 'react'
import Banner from '../Banner'
import { Content } from './styles'
import Card,{ICard} from "../Card/index"
import axios from 'axios'
import Particles from 'react-tsparticles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../..'
import { fetchAll,reverseData } from '../../assets/features/Servers'
type Props = {}

const Contents = (props: Props) => {
    const theme = useSelector((state:RootState) => state.theme)
    const sidebarTab = useSelector((state:RootState) => state.sideBar)
    const {servers} = useSelector((state:RootState) => state.servers)
    const dispatch = useDispatch()
    
     React.useEffect(() => {
      dispatch(fetchAll())
        },[]);

      const Tabs =[{
        component:<div className='d-flex flex-column container'>
         <div   className="row">
         {
           servers.map((item:ICard) => {
                return  <div  className="col-xxl-4 col-md-12"
                onClick={
                  () => {
                  }
                }
                >
   
   <Card key={item.id} src={item.icon} title={item.name} description={""}
   memberCount={item.memberCount}
   />
                </div>
            })
          }
          
</div>
        </div>
         
     
      }]
  return (
     <div style={{
          flex: 1,
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          background:theme.isDark ? 'var(--dark3)' : "#e3e5e8",
          position:"relative",
          transition: "all 0.3s ease",
     }}>
          <Particles
      id="tsparticles"
      className='particles'
      options={{
        "particles": {
          "number": {
            "value": 90,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": theme.isDark ? '#36393f' : "#fff"
          },
          "shape": {
            "type": ["polygon"],
            "stroke": {
              "width": 2,
              "color": theme.isDark ? "#ffc619":"#404eed"
            },
            "polygon": {
              "nb_sides": 3
            },
          },
          "opacity": {
            "value": 1,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 10,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 0,
            "color": "#ffffff",
            "opacity": 0,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 1.578370017283152,
            "direction": "top",
            "random": true,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 8759.953595921495,
              "rotateY": 10000
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 0,
              "line_linked": {
                "opacity": 0.9454360104244601
              }
            },
            "bubble": {
              "distance": 400,
              "size": 4,
              "duration": 0.3,
              "opacity": 1,
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }}
    />
    <Content isDark={theme.isDark}>
      
    <Banner
    />
    {
      Tabs[sidebarTab.activeTabIndex].component
    }
    </Content>
    </div>
  )
}



export default Contents
