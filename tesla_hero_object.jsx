import React, {Component} from 'react'
import CX from 'classnames'
import ToolBar from './toolbar'
// import './app_style.css'

class TeslaHero extends Component{
    constructor(props){
        super(props);

        this.state = { 
            error: "RUT ROH",  
            imageIdx: 0, 
            message: "Nope", 
            imageArray: ["div1","div2","div3","div4"], 
            animating: false,
        }
        this.handleScroll = this.handleScroll.bind(this);
    }



    componentDidMount() {
        document.addEventListener('mousewheel', this.handleScroll ); 
    }

    componentWillUnmount(){
        document.removeEventListener('mousewheel', this.handleScroll);
    }

    handleScroll(e) {
       
        // animating flag minimizes the actions of a scroll event via the setTimeout function
        //  this is an attempt to counteract apple products 'kinetic mouse effect' where the mouse continues to scroll
        //  long after the sweeping motion was initially made...
            if(!this.state.animating){ 
                this.setState({animating: true });

                // simulated animation lag to slow the scrolling to 1 image at a time
                setTimeout(() => {
                    this.setState({animating: false});
                }, 800)

                // determines if the mouse was scrolled up or down resulting in 1 or -1
                var delta = Math.max(-1, Math.min(1, (e.wheelDelta)));
            
            // if scrolling down
                if(delta === -1){
                    // and within bounds
                    if(this.state.imageIdx < this.state.imageArray.length - 1){
                        let imageIdx = this.state.imageIdx + 1
                        this.setState({ imageIdx: imageIdx})
                    }   
            // if scrolling up 
                } else if(delta === 1){
                    // and within bounds
                    if(this.state.imageIdx > 0){
                        let imageIdx = this.state.imageIdx - 1
                        this.setState({ imageIdx: imageIdx})
                    }    
                }
                

                // scrollsBy height of window in the direction of the scroll
                window.scrollBy({left: 0, top: (window.innerHeight * -delta), behavior: 'smooth'});
            }
    }

    render(){

        return(
            <div>
                <ToolBar />
                <div className="div1"> </div>
                <div className="div2"> </div>
                <div className="div3"> </div>
                <div className="div4"> </div>
            </div>
        );
    }
}

export default TeslaHero