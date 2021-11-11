import { Button, Container} from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

const Banner = () => {
    var items = [
        {
            name: "Red Gaming Chair",
            img: 'https://image.freepik.com/free-vector/banner-gaming-chair-social-media-post-template_188201-41.jpg'
        },
        {
            name: "Soft",
            img: 'https://www.byte-zone.net/modules/uploader/uploads/animation/pic/crop1/banner_bytezone_stoli_1920x969_en.jpg'
        },
        {
            name: "Soft",
            img: 'https://basic-tutorials.com/wp-content/uploads/2019/12/Genesis-Nitro-880_Banner.jpg'
        }
    ]
    return (
        <Carousel style={{height:'100%',width:'100%',m:'5 auto'}} 
        next={ (next, active) => (`${active} ${next}`)}
        prev={ (prev, active) => (`${active} ${prev}`) }
        >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    );
};

function Item(props) {
    return (
        <Container style={{m:'0 auto',color:'#97A8DB'}}>
            <h2 >{props.item.name}</h2>
            <img
                style={{height:'100%',width:'100%',m:'5px 0'}}
                src={props.item.img}
                alt={props.item.name} />
            <Button style={{m:'0 auto'}} className="CheckButton" >
                Explore
            </Button>
        </Container>
    )
}

export default Banner;