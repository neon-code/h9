import React from 'react';
import '../CSS/primary.css';
import { Button, Image, Icon, Label, Header, Modal } from 'semantic-ui-react';

var fileDir = {
    1:[
        { fileName: './images/n01440764_297.JPEG', id: "n01440764" },
        { fileName: './images/n01443537_445.JPEG', id: "n01443537" },
        { fileName: './images/n01484850_95.JPEG', id: "n01484850" },
        { fileName: './images/n01514668_80.JPEG', id: "n01514668" },
        { fileName: './images/n01518878_5.JPEG', id: "n01518878" },
        { fileName: './images/n01641577_150.JPEG', id: "n01641577" },
        { fileName: './images/n01664065_360.JPEG', id: "n01664065" },
        { fileName: './images/n01698640_684.JPEG', id: "n01698640" },
        { fileName: './images/n01729322_411.JPEG', id: "n01729322" },
        { fileName: './images/n01742172_42.JPEG', id: "n01742172" },
        { fileName: './images/n01980166_9.JPEG', id: "n01980166" },
        { fileName: './images/n02056570_63.JPEG', id: "n02056570" },
        { fileName: './images/n02077923_6.JPEG', id: "n02077923" },
        { fileName: './images/n02086646_23.JPEG', id: "n02086646" },
        { fileName: './images/n02087046_178.JPEG', id: "n02087046" },
        { fileName: './images/n02093859_13.JPEG', id: "n02093859" },
        { fileName: './images/n02096294_79.JPEG', id: "n02096294" },
        { fileName: './images/n02096585_145.JPEG', id: "n02096585" },
        { fileName: './images/n02105162_299.JPEG', id: "n02105162" },
        { fileName: './images/n02105505_72.JPEG', id: "n02105505" },
        { fileName: './images/n02128385_114.JPEG', id: "n02128385" },
        { fileName: './images/n02128757_359.JPEG', id: "n02128757" },
        { fileName: './images/n02129165_345.JPEG', id: "n02129165" },
        { fileName: './images/n02133161_7.JPEG', id: "n02133161" },
        { fileName: './images/n02165456_1036.JPEG', id: "n02165456" },
        { fileName: './images/n02672831_386.JPEG', id: "n02672831" },
        { fileName: './images/n02676566_71.JPEG', id: "n02676566" },
        { fileName: './images/n02687172_343.JPEG', id: "n02687172" },
        { fileName: './images/n02690373_101.JPEG', id: "n02690373" },
        { fileName: './images/n02708093_11.JPEG', id: "n02708093" },
        { fileName: './images/n02870880_16.JPEG', id: "n02870880" },
        { fileName: './images/n02906734_444.JPEG', id: "n02906734" },
        { fileName: './images/n02930766_2286.JPEG', id: "n02930766" },
        { fileName: './images/n02963159_64.JPEG', id: "n02963159" },
        { fileName: './images/n02971356_324.JPEG', id: "n02971356" },
        { fileName: './images/n03498962_92.JPEG', id: "n03498962" },
        { fileName: './images/n03649909_64.JPEG', id: "n03649909" },
        { fileName: './images/n03680355_440.JPEG', id: "n03680355" },
        { fileName: './images/n03832673_117.JPEG', id: "n03832673" },
        { fileName: './images/n03877472_515.JPEG', id: "n03877472" },
        { fileName: './images/n04467665_679.JPEG', id: "n04467665" },
        { fileName: './images/n04532670_238.JPEG', id: "n04532670" },
        { fileName: './images/n04599235_1068.JPEG', id: "n04599235" },
        { fileName: './images/n04606251_147.JPEG', id: "n04606251" },
        { fileName: './images/n07693725_197.JPEG', id: "n07693725" },
        { fileName: './images/n07745940_72.JPEG', id: "n07745940" },
        { fileName: './images/n07747607_69.JPEG', id: "n07747607" },
        { fileName: './images/n07753275_160.JPEG', id: "n07753275" },
        { fileName: './images/n07753592_59.JPEG', id: "n07753592" },
        { fileName: './images/n07760859_53.JPEG', id: "n07760859" },
    ],

    2:[
        { fileName: './images/n02666196_350.JPEG', id: "3" },
        { fileName: './images/n02906734_609.JPEG', id: "5" },
        { fileName: './images/n02965783_68.JPEG', id: "9" },
        { fileName: './images/n02966193_312.JPEG', id: "3" },
        { fileName: './images/n02974003_218.JPEG', id: "9" },
        { fileName: './images/n02999410_3094.JPEG', id: "8" },
        { fileName: './images/n03042490_1274.JPEG', id: "0" },
        { fileName: './images/n03063599_4156.JPEG', id: "2" },
        { fileName: './images/n03208938_13278.JPEG', id: "9" },
        { fileName: './images/n03220513_897.JPEG', id: "0" },
        { fileName: './images/n03452741_239.JPEG', id: "6" },
        { fileName: './images/n03483316_952.JPEG', id: "3" },
        { fileName: './images/n03496892_1009.JPEG', id: "9" },
        { fileName: './images/n03532672_506.JPEG', id: "3" },
        { fileName: './images/n03602883_3775.JPEG', id: "1" },
        { fileName: './images/n03658185_6000.JPEG', id: "5" },
        { fileName: './images/n03661043_426.JPEG', id: "4" },
        { fileName: './images/n03717622_462.JPEG', id: "0" },
        { fileName: './images/n03770679_88.JPEG', id: "9" },
        { fileName: './images/n03781244_387.JPEG', id: "0" },
        { fileName: './images/n03832673_395.JPEG', id: "1" },
        { fileName: './images/n03866082_212.JPEG', id: "8" },
        { fileName: './images/n03871628_19.JPEG', id: "2" },
        { fileName: './images/n03877472_3904.JPEG', id: "8" },
        { fileName: './images/n03916031_487.JPEG', id: "8" },
        { fileName: './images/n03924679_210.JPEG', id: "1" },
        { fileName: './images/n03929855_971.JPEG', id: "8" },
        { fileName: './images/n03980874_266.JPEG', id: "8" },
        { fileName: './images/n03982430_12753.JPEG', id: "7" },
        { fileName: './images/n03991062_1606.JPEG', id: "7" },
        { fileName: './images/n03995372_20250.JPEG', id: "5" },
        { fileName: './images/n04004767_263.JPEG', id: "1" },
        { fileName: './images/n04069434_4014.JPEG', id: "3" },
        { fileName: './images/n04141975_1260.JPEG', id: "5" },
        { fileName: './images/n04147183_712.JPEG', id: "9" },
        { fileName: './images/n04192698_3386.JPEG', id: "5" },
        { fileName: './images/n04264628_576.JPEG', id: "1" },
        { fileName: './images/n04335435_4220.JPEG', id: "9" },
        { fileName: './images/n04344873_35171.JPEG', id: "4" },
        { fileName: './images/n04356056_144.JPEG', id: "8" },
        { fileName: './images/n04398044_69.JPEG', id: "3" },
        { fileName: './images/n04404412_931.JPEG', id: "1" },
        { fileName: './images/n04442312_506.JPEG', id: "5" },
        { fileName: './images/n04447861_3.JPEG', id: "4" },
        { fileName: './images/n04476259_260.JPEG', id: "2" },
        { fileName: './images/n04493381_952.JPEG', id: "2" },
        { fileName: './images/n04507155_407.JPEG', id: "5" },
        { fileName: './images/n04579432_659.JPEG', id: "6" },
        { fileName: './images/n04612504_284.JPEG', id: "9" },
        { fileName: './images/n07248320_68872.JPEG', id: "8" }
    ],

    3:[
        { fileName: './images/n02699494_153.JPEG', id: "n02699494" },
        { fileName: './images/n02699494_371.JPEG', id: "n02699494" },
        { fileName: './images/n02788148_293.JPEG', id: "n02788148" },
        { fileName: './images/n02788148_447.JPEG', id: "n02788148" },
        { fileName: './images/n02791270_589.JPEG', id: "n02791270" },
        { fileName: './images/n02791270_680.JPEG', id: "n02791270" },
        { fileName: './images/n02793495_173.JPEG', id: "n02793495" },
        { fileName: './images/n02793495_49.JPEG', id: "n02793495" },
        { fileName: './images/n02814860_161.JPEG', id: "n02814860" },
        { fileName: './images/n02814860_178.JPEG', id: "n02814860" },
        { fileName: './images/n02825657_329.JPEG', id: "n02825657" },
        { fileName: './images/n02825657_48.JPEG', id: "n02825657" },
        { fileName: './images/n02859443_141.JPEG', id: "n02859443" },
        { fileName: './images/n02859443_584.JPEG', id: "n02859443" },
        { fileName: './images/n02871525_482.JPEG', id: "n02871525" },
        { fileName: './images/n02871525_900.JPEG', id: "n02871525" },
        { fileName: './images/n02894605_1089.JPEG', id: "n02894605" },
        { fileName: './images/n02894605_938.JPEG', id: "n02894605" },
        { fileName: './images/n02980441_317.JPEG', id: "n02980441" },
        { fileName: './images/n02980441_639.JPEG', id: "n02980441" },
        { fileName: './images/n03000134_111.JPEG', id: "n03000134" },
        { fileName: './images/n03000134_113.JPEG', id: "n03000134" },
        { fileName: './images/n03028079_102.JPEG', id: "n03028079" },
        { fileName: './images/n03028079_603.JPEG', id: "n03028079" },
        { fileName: './images/n03032252_962.JPEG', id: "n03032252" },
        { fileName: './images/n03065424_1344.JPEG', id: "n03065424" },
        { fileName: './images/n03065424_82.JPEG', id: "n03065424" },
        { fileName: './images/n03160309_627.JPEG', id: "n03160309" },
        { fileName: './images/n03160309_959.JPEG', id: "n03160309" },
        { fileName: './images/n03220513_302.JPEG', id: "n03220513" },
        { fileName: './images/n03220513_33.JPEG', id: "n03220513" },
        { fileName: './images/n03240683_273.JPEG', id: "n03240683" },
        { fileName: './images/n03240683_283.JPEG', id: "n03240683" },
        { fileName: './images/n03661043_759.JPEG', id: "n03661043" },
        { fileName: './images/n03661043_875.JPEG', id: "n03661043" },
        { fileName: './images/n03776460_614.JPEG', id: "n03776460" },
        { fileName: './images/n03776460_822.JPEG', id: "n03776460" },
        { fileName: './images/n03781244_39.JPEG', id: "n03781244" },
        { fileName: './images/n03781244_646.JPEG', id: "n03781244" },
        { fileName: './images/n03788195_532.JPEG', id: "n03788195" },
        { fileName: './images/n03788195_759.JPEG', id: "n03788195" },
        { fileName: './images/n03837869_148.JPEG', id: "n03837869" },
        { fileName: './images/n03837869_161.JPEG', id: "n03837869" },
        { fileName: './images/n03877845_540.JPEG', id: "n03877845" },
        { fileName: './images/n03877845_848.JPEG', id: "n03877845" },
        { fileName: './images/n03899768_1242.JPEG', id: "n03899768" },
        { fileName: './images/n03899768_323.JPEG', id: "n03899768" },
        { fileName: './images/n03903868_5674.JPEG', id: "n03903868" },
        { fileName: './images/n03930313_1116.JPEG', id: "n03930313" },
        { fileName: './images/n03930313_508.JPEG', id: "n03930313" },
    ]
}

var activeIndex = Math.floor(Math.random() * 50), usedImages = [activeIndex], taskDone = 1, flag;
var timeTaken = { minutes: 0, seconds: 0, milsec: 0 }, indvTime = [0, 0, 0], addTime = [0, 0, 0], avgTime = [], Interval;
var level = 1, fileName = fileDir[level][activeIndex].fileName, levelFlag = [ true, true ];
const LevelLimit = [50, 100, 150];

export class MainImages extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isopen: false,
            activeNext: false,
            buttonText: "Next Image"
        };
    }

    componentDidMount() {
        //The componentDidMount() is a React method which is triggered when the app starts.
        alert("* Please disable AdBlock and any other antivirus software before you begin!\n Make sure to \"Allow\" popups/cookies on this app! *");

        this.props.onRef(this);
        this.props.setCards(level);
    }

    updateButton() {
        //A simple condition statement to enable/disable the NEXT button
        this.state.activeNext ? this.setState({ activeNext: false }) : this.setState({ activeNext: true })
    }

    OnFinish(x) {
        if ( x === 1 ) {
            //To find the Average total time
            let td = taskDone - 1;
            avgTime[0] = addTime[0] / td;
            avgTime[1] = addTime[1] / td;
            avgTime[2] = addTime[2] / td;

            avgTime[1] += (avgTime[0] * 60) % 60;
            avgTime[2] += (avgTime[1] * 100) % 100;

            avgTime[0] = Math.floor(avgTime[0]);
            avgTime[1] = Math.floor(avgTime[1]);
            avgTime[2] = Math.floor(avgTime[2]);

            //this onFinish is in App.js as an html prop in <MainImages>
            this.props.onFinish(addTime, avgTime);
        }
        else {
            //To find the Average indv time
            let td = LevelLimit[0] ;
            avgTime[0] = indvTime[0] / td;
            avgTime[1] = indvTime[1] / td;
            avgTime[2] = indvTime[2] / td;

            avgTime[1] += (avgTime[0] * 60) % 60;
            avgTime[2] += (avgTime[1] * 100) % 100;

            avgTime[0] = Math.floor(avgTime[0]);
            avgTime[1] = Math.floor(avgTime[1]);
            avgTime[2] = Math.floor(avgTime[2]);

            this.props.apndtime(indvTime, avgTime);
        }
    }

    startTimer() {
        timeTaken.milsec++;

        if (timeTaken.milsec > 99) {
            timeTaken.seconds++;
            timeTaken.milsec = 0;
        }

        if (timeTaken.seconds > 59) {
            timeTaken.minutes++;
            timeTaken.seconds = 0;
        }
    }

    startWatch() {
        Interval = setInterval(this.startTimer, 10);
    }

    changeImage() {
        //Pause the StopWatch
        clearInterval(Interval);
        this.updateButton();

        //To pass values to Parent (App.js);
        let t = timeTaken.minutes + ":" + timeTaken.seconds + ":" + timeTaken.milsec;

        if( level === 2 || level === 3 ) 
            this.props.onNextImage(fileDir[level][activeIndex].fileName, fileDir[level][activeIndex].id, t);
        else 
            this.props.onNextImage(fileDir[level][activeIndex].fileName, parseInt(fileDir[level][activeIndex].id.slice(1), 10), t);
        
        //Add the time to find total time take
        addTime[2] += timeTaken.milsec;
        if (addTime[2] > 99) {
            addTime[1] += Math.floor(addTime[2] / 100);
            addTime[2] %= 100;
        }
        addTime[1] += timeTaken.seconds;
        if (addTime[1] > 59) {
            addTime[0] += Math.floor(addTime[1] / 60);
            addTime[1] %= 60;
        }
        addTime[0] += timeTaken.minutes;

        //For individual Level time
        indvTime[2] += timeTaken.milsec;
        if (indvTime[2] > 99) {
            indvTime[1] += Math.floor(indvTime[2] / 100);
            indvTime[2] %= 100;
        }
        indvTime[1] += timeTaken.seconds;
        if (indvTime[1] > 59) {
            indvTime[0] += Math.floor(indvTime[1] / 60);
            indvTime[1] %= 60;
        }
        indvTime[0] += timeTaken.minutes;
        
        //Clear the StopWatch
        timeTaken.milsec = timeTaken.seconds = timeTaken.minutes = 0;

        //Load next image
        taskDone++;
        //Change of Level happens here
        if (taskDone > LevelLimit[0] && taskDone < LevelLimit[1] && levelFlag[0] === true) {

            //to indicate a Level has finished labeling
            this.OnFinish(0);

            //sets the heirarchy level
            level = 2;

            //To flush out the indices and store new values
            usedImages = usedImages.slice(0, 0);

            //Reset indv Timer
            indvTime[0] = indvTime[1] = indvTime[2] = 0;

            //to prevent re-entering this if statement
            levelFlag[0] = false;
        }
        else
        if (taskDone > LevelLimit[1] && taskDone < LevelLimit[2] && levelFlag[1] === true) {
            this.OnFinish(0);
            level =3;
            usedImages = usedImages.slice(0, 0);
            indvTime[0] = indvTime[1] = indvTime[2] = 0;
            levelFlag[1] = false;
        }
        else
        if( taskDone === LevelLimit[2] )
            this.setState({ buttonText: "Finish!" })
        
        if (taskDone > LevelLimit[2] ) {
            this.OnFinish(0);
            indvTime[0] = indvTime[1] = indvTime[2] = 0;

            //indicated that the task has finished
            this.setState({
                isopen: true
            })
        }
        else {
            //Here we check if a randomly selected image has been selected before or not
            do {
                flag = true;
                activeIndex = Math.floor(Math.random() * 50);

                //We store the array index of FileDir in an array and use it compare
                for (var i = 0; i < usedImages.length; i++)
                    if (usedImages[i] === activeIndex)
                        flag = false;

                //only if a new, unique value is selected, it will display
                if (flag === true) {
                    usedImages.push(activeIndex);
                    fileName= fileDir[level][activeIndex].fileName;
                }
            } while (flag !== true);
        }

        this.props.setCards(level);

        //Start the Watch
        this.startWatch();
    }

    render() {
        return (
            <div>
                <Image className="imageStyling" src={fileName} />

                <Label style={{ zIndex: "1", position: "fixed", top: "10px", right: '4vw' }} color="teal">
                    {taskDone}/150
                </Label>

                <div className="NextButton" style={{ width: '180px' }} >
                    {this.state.activeNext ?
                        <Button primary animated size='huge' onClick={this.changeImage.bind(this)}>
                            <Button.Content visible> {this.state.buttonText} </Button.Content>
                            <Button.Content hidden>
                                <Icon name='right arrow' />
                            </Button.Content>
                        </Button>
                        :
                        <Button disabled size='huge'>{this.state.buttonText}</Button>
                    }
                </div>

                <Modal open={this.state.isopen} basic dimmer="blurring" style={{ position: "fixed", width: "auto", marginTop: "30vh", marginLeft: "38vw" }}>
                    <Header icon='check square outline' style={{ textAlign: "center" }} content='Task Completed!' />
                    <Modal.Content>
                        <h2> Thank you for your participation! <br />
                            Please download the result. </h2>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='blue' inverted onClick={this.OnFinish.bind(this, 1)}>
                            <Icon name='download icon' /> Download Result
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}