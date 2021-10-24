import { BottomNavigation, Button, BottomNavigationAction, Typography, Grid, Card, CardActionArea, CardMedia, CardContent, Modal, Box } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import TrainIcon from '@mui/icons-material/Train';
import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import 'assets/css/slick.min.css'
import { EventModel } from "services/event/types/EventModel";
import { useEventService } from "services/event/EventService";
import AnnouncementIcon from '@mui/icons-material/Announcement';
import { FeedbackModel } from "services/feedback/types/FeedbackModel";
import { FormFeedback } from "components/forms/form-feedback/FormFeedback";
import { useFeedbackService } from "services/feedback/FeedbackService";
import { useHistory } from "react-router-dom";
import QrCodeIcon from '@mui/icons-material/QrCode';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import Logo from 'assets/img/logo.png'
import PersonIcon from '@mui/icons-material/Person';
import { usePointService } from "services/point/PointService";
import { Theme } from "@mui/material";
import { useTheme } from '@mui/system'

const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    arrows: false,
    swipe: false,
    autoPlay: false,
    accessibility: false,
    speed: 100,
};

export const MainPage = () => {
    const theme = useTheme() as Theme
    const history = useHistory()
    const slider = useRef<any>()
    const [open, setOpen] = useState(false)
    const [openScan, setOpenScan] = useState(false)
    const { getPoints, postPoints } = usePointService()
    const [ points, setPoints ] = useState('0')
    useEffect(()=>{
        getPoints().then((res)=>{
            setPoints(res.data.content.pontos)
        })
    }, [])
    const [activeIndex, setActiveIndex] = useState(0)
    const { getEventAll, getEventById } = useEventService()
    const { sendFeedback } = useFeedbackService()
    const [event, setEvent] = useState<EventModel>(new EventModel())
    const handleSubmitFeedback = (model: FeedbackModel) => {
        sendFeedback(model).then((res) => {
            if (res.status === 201 || res.status === 200)
                setOpen(false)
        })
    }
    const handleCLickCardEvent = (id: string) => {
        getEventById(id).then((res) => {
            if (res.status === 200 || res.status === 204) {
                setEvent(res.data.content)
                setActiveIndex(4)
            }
        })
    }
    useEffect(() => {
        if (slider.current) {
            slider.current.slickGoTo(activeIndex)
        }
    }, [activeIndex])

    useEffect(() => {
        getEventAll().then((res) => {
            console.log(res)
            if (res.data) {
                if (res.data.content) {
                    setEventListAll(res.data.content)
                    if (res.data.content.length > 3) {
                        setEventList(res.data.content.slice(0, 3))
                    } else {
                        setEventList(res.data.content)
                    }
                }
            }
        })
    }, [getEventAll])
    const [eventList, setEventList] = useState<Array<EventModel>>(new Array<EventModel>())
    const [eventListAll, setEventListAll] = useState<Array<EventModel>>(new Array<EventModel>())

    return (
        <>
            <div style={{
                width: '100vw',
                background: '#fff',
                position: 'fixed',
                top: 0,
                zIndex: 10,
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <div style={{
                    marginTop: '5px',
                    marginRight: '15px'
                }}>
                    <Button variant="contained" onClick={() => {
                        setOpen(true)
                    }}>
                        <AnnouncementIcon />
                    </Button>
                </div>
            </div>
            <div style={{
                marginTop: '45px',
            }}>
                <Slider {...settings} ref={slider}>
                    <div>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <img src={Logo} alt="Logo Bonde CPTM" />
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" direction="column" spacing={2} style={{
                            marginTop: '30px'
                        }}>
                            <Grid item>
                                <Typography variant="h5">
                                    Eventos
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Grid container>
                                    {
                                        eventList.map((item, index) => {
                                            return (
                                                <Grid item md={6} xs={12} key={index}>
                                                    <div onClick={() => {
                                                        handleCLickCardEvent(item.idEvent)
                                                    }}>
                                                        <Card>
                                                            <CardActionArea>
                                                                <CardMedia
                                                                    component="img"
                                                                    height="140"
                                                                    image={item.foto}
                                                                    alt="green iguana"
                                                                />
                                                                <CardContent>
                                                                    <Typography gutterBottom variant="h5" component="div">
                                                                        {item.nome}
                                                                    </Typography>
                                                                    <Typography variant="body2" color="text.secondary">
                                                                        {item.descricao}
                                                                    </Typography>
                                                                </CardContent>
                                                            </CardActionArea>
                                                        </Card>
                                                    </div>
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                    <div>
                        <Typography variant="h4" align="center" style={{
                            marginBottom: '20px',
                        }}>
                            Eventos
                        </Typography>

                        <Grid container>
                            {
                                eventListAll.map((item, index) => {
                                    return (
                                        <Grid item md={6} xs={12} key={index}>
                                            <div onClick={() => {
                                                handleCLickCardEvent(item.idEvent)
                                            }}>
                                                <Card>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            component="img"
                                                            height="140"
                                                            image={item.foto}
                                                            alt="green iguana"
                                                        />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5" component="div">
                                                                {item.nome}
                                                            </Typography>
                                                            <Typography variant="body2" color="text.secondary">
                                                                {item.descricao}
                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </div>
                                        </Grid>
                                    )
                                })
                            }


                        </Grid>
                    </div>
                    <div>
                        Trens
                    </div>
                    <div>
                        <div>
                            <Grid container justifyContent="center">
                                <Grid item md={6} xs={10}>
                                    <div style={{
                                        display: 'flex',
                                        background: theme.palette.primary.main,
                                        color: 'white',
                                        justifyContent: 'center',
                                        padding: '20px',
                                        marginTop: '30px',
                                        borderRadius: '20px'
                                    }}>

                                        <Typography >
                                            Você possui <br />
                                            <span style={{
                                                fontWeight: 'bold'
                                            }}>
                                                {points} pontos
                                            </span>
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div>
                        <Grid container justifyContent="center" direction="column" spacing={2}>
                            <Grid item xs={10}>
                                <Grid container justifyContent="center">
                                    <Grid item>
                                        <img style={{
                                            maxWidth: '100%',
                                            maxHeight: '200px',

                                        }} src={event.foto} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography variant="h5" align="center">
                                    {event.nome}
                                </Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography variant="h5" align="center">
                                    {event.local}
                                </Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography variant="h5" align="center">
                                    {event.data}
                                </Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography variant="h5" align="center">
                                    {event.descricao}
                                </Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <Grid container justifyContent="center">
                                    <Grid item>
                                        <Button onClick={() => {
                                            setOpenScan(true)
                                        }} variant="contained" color="primary">
                                            <QrCodeIcon style={{
                                                marginRight: '10px'
                                            }} />
                                            Marcar presença
                                        </Button>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item xs={10}>

                            </Grid>
                        </Grid>
                    </div>

                </Slider>
            </div>

            <div style={{
                position: 'fixed',
                bottom: 0,
                width: '100vw',
            }}>
                <BottomNavigation
                    showLabels
                    value={activeIndex}
                    onChange={(event, newValue) => {
                        setActiveIndex(newValue);
                    }}
                >
                    <BottomNavigationAction onClick={() => {
                        setActiveIndex(0)
                    }} label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction onClick={() => {
                        setActiveIndex(1)
                    }} label="Eventos" icon={<EventAvailableIcon />} />
                    <BottomNavigationAction onClick={() => {
                        setActiveIndex(2)
                    }} label="Trens" icon={<TrainIcon />} />
                    <BottomNavigationAction onClick={() => {
                        setActiveIndex(3)
                    }} label="Perfil" icon={<PersonIcon />} />
                </BottomNavigation>
            </div>
            {
                openScan ? (
                    <Modal
                        open={openScan}
                        onClose={() => {
                            setOpenScan(false)
                        }}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box mt={5}>
                            <Grid container justifyContent="center">
                                <Grid item md={6} xs={10} style={{
                                    background: '#fff',
                                    padding: '30px',
                                    borderRadius: '20px',
                                }}>
                                    <BarcodeScannerComponent
                                        width={'100%'}
                                        onUpdate={(err, result) => {
                                            if (result) {
                                                postPoints().then((res)=>{
                                                    if(res.status === 200 || res.status === 204){
                                                        setPoints(res.data.content.pontos)
                                                        setOpenScan(false)
                                                        alert('Sucesso ao verificar o código')
                                                    }
                                                })
                                            }
                                            else {

                                            }
                                        }}
                                    />

                                </Grid>
                            </Grid>
                        </Box>
                    </Modal>
                ) : null
            }

            <Modal
                open={open}
                onClose={() => {
                    setOpen(false)
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box mt={5}>
                    <Grid container justifyContent="center">
                        <Grid md={6} xs={10} style={{
                            background: '#fff',
                            padding: '30px',
                            borderRadius: '20px',
                        }}>
                            <Typography variant="h5" align="center" style={{
                                marginBottom: '20px'
                            }}>
                                Enviar feedback
                            </Typography>
                            <FormFeedback onSubmit={handleSubmitFeedback} />

                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
}
