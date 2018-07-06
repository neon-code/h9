import React from 'react';
import '../CSS/primary.css';
import { Button, Image, Icon, Label, Header, Modal } from 'semantic-ui-react';

var fileDir = {
    1:[
        { fileName: './images/n01616318_115.JPEG', id: "n01616318" },
        { fileName: './images/n01667114_73.JPEG', id: "n01667114" },
        { fileName: './images/n01748264_23.JPEG', id: "n01748264" },
        { fileName: './images/n01855032_80.JPEG', id: "n01855032" },
        { fileName: './images/n01944390_54.JPEG', id: "n01944390" },
        { fileName: './images/n02086646_117.JPEG', id: "n02086646" },
        { fileName: './images/n02097047_128.JPEG', id: "n02097047" },
        { fileName: './images/n02097130_63.JPEG', id: "n02097130" },
        { fileName: './images/n02097474_285.JPEG', id: "n02097474" },
        { fileName: './images/n02099712_110.JPEG', id: "n02099712" },
        { fileName: './images/n02102040_107.JPEG', id: "n02102040" },
        { fileName: './images/n02110063_49.JPEG', id: "n02110063" },
        { fileName: './images/n02110958_51.JPEG', id: "n02110958" },
        { fileName: './images/n02112018_8.JPEG', id: "n02112018" },
        { fileName: './images/n02120505_358.JPEG', id: "n02120505" },
        { fileName: './images/n02123045_262.JPEG', id: "n02123045" },
        { fileName: './images/n02123159_155.JPEG', id: "n02123159" },
        { fileName: './images/n02127052_502.JPEG', id: "n02127052" },
        { fileName: './images/n02128385_114.JPEG', id: "n02128385" },
        { fileName: './images/n02129604_165.JPEG', id: "n02129604" },
        { fileName: './images/n02134084_197.JPEG', id: "n02134084" },
        { fileName: './images/n02169497_273.JPEG', id: "n02169497" },
        { fileName: './images/n02206856_112.JPEG', id: "n02206856" },
        { fileName: './images/n02259212_21.JPEG', id: "n02259212" },
        { fileName: './images/n02268443_1461.JPEG', id: "n02268443" },
        { fileName: './images/n02279972_461.JPEG', id: "n02279972" },
        { fileName: './images/n02391049_18.JPEG', id: "n02391049" },
        { fileName: './images/n02480495_261.JPEG', id: "n02480495" },
        { fileName: './images/n02510455_115.JPEG', id: "n02510455" },
        { fileName: './images/n02640242_62.JPEG', id: "n02640242" },
        { fileName: './images/n02690373_290.JPEG', id: "n02690373" },
        { fileName: './images/n02782093_23.JPEG', id: "n02782093" },
        { fileName: './images/n02786058_525.JPEG', id: "n02786058" },
        { fileName: './images/n02802426_131.JPEG', id: "n02802426" },
        { fileName: './images/n02948072_432.JPEG', id: "n02948072" },
        { fileName: './images/n02992529_344.JPEG', id: "n02992529" },
        { fileName: './images/n03100240_266.JPEG', id: "n03100240" },
        { fileName: './images/n03393912_95.JPEG', id: "n03393912" },
        { fileName: './images/n03404251_71.JPEG', id: "n03404251" },
        { fileName: './images/n03482405_163.JPEG', id: "n03482405" },
        { fileName: './images/n03796401_142.JPEG', id: "n03796401" },
        { fileName: './images/n03866082_9.JPEG', id: "n03866082" },
        { fileName: './images/n03887697_36.JPEG', id: "n03887697" },
        { fileName: './images/n03942813_110.JPEG', id: "n03942813" },
        { fileName: './images/n07583066_244.JPEG', id: "n07583066" },
        { fileName: './images/n07715103_75.JPEG', id: "n07715103" },
        { fileName: './images/n07753275_160.JPEG', id: "n07753275" },
        { fileName: './images/n07892512_608.JPEG', id: "n07892512" },
        { fileName: './images/n10565667_218.JPEG', id: "n10565667" },
        { fileName: './images/n13052670_156.JPEG', id: "n13052670" },
    ],

    2:[
        { fileName: './images/n02672831_40.JPEG', id: "6" },
        { fileName: './images/n02676566_178.JPEG', id: "6" },
        { fileName: './images/n02701002_175.JPEG', id: "9" },
        { fileName: './images/n02783161_8.JPEG', id: "5" },
        { fileName: './images/n02793495_94.JPEG', id: "0" },
        { fileName: './images/n02799071_27.JPEG', id: "7" },
        { fileName: './images/n02814860_180.JPEG', id: "0" },
        { fileName: './images/n02883205_169.JPEG', id: "8" },
        { fileName: './images/n02948072_9.JPEG', id: "3" },
        { fileName: './images/n02988304_306.JPEG', id: "1" },
        { fileName: './images/n03028079_102.JPEG', id: "0" },
        { fileName: './images/n03047690_32.JPEG', id: "8" },
        { fileName: './images/n03085013_773.JPEG', id: "1" },
        { fileName: './images/n03110669_279.JPEG', id: "6" },
        { fileName: './images/n03133878_51.JPEG', id: "5" },
        { fileName: './images/n03355925_159.JPEG', id: "5" },
        { fileName: './images/n03445924_9.JPEG', id: "9" },
        { fileName: './images/n03483316_598.JPEG', id: "3" },
        { fileName: './images/n03662601_557.JPEG', id: "9" },
        { fileName: './images/n03792782_139.JPEG', id: "9" },
        { fileName: './images/n03796401_211.JPEG', id: "9" },
        { fileName: './images/n03866082_206.JPEG', id: "8" },
        { fileName: './images/n03895866_873.JPEG', id: "9" },
        { fileName: './images/n03977966_1394.JPEG', id: "9" },
        { fileName: './images/n04009552_306.JPEG', id: "1" },
        { fileName: './images/n04067472_43.JPEG', id: "5" },
        { fileName: './images/n04099969_25.JPEG', id: "4" },
        { fileName: './images/n04120489_106.JPEG', id: "8" },
        { fileName: './images/n04204347_5.JPEG', id: "9" },
        { fileName: './images/n04252077_85.JPEG', id: "9" },
        { fileName: './images/n04254777_354.JPEG', id: "8" },
        { fileName: './images/n04266014_152.JPEG', id: "9" },
        { fileName: './images/n04285008_376.JPEG', id: "9" },
        { fileName: './images/n04328186_255.JPEG', id: "5" },
        { fileName: './images/n04398044_69.JPEG', id: "3" },
        { fileName: './images/n04404412_416.JPEG', id: "4" },
        { fileName: './images/n04409515_202.JPEG', id: "7" },
        { fileName: './images/n04483307_198.JPEG', id: "9" },
        { fileName: './images/n04487081_216.JPEG', id: "9" },
        { fileName: './images/n04509417_12.JPEG', id: "9" },
        { fileName: './images/n04542943_2.JPEG', id: "5" },
        { fileName: './images/n04548280_98.JPEG', id: "3" },
        { fileName: './images/n04550184_571.JPEG', id: "4" },
        { fileName: './images/n04552348_340.JPEG', id: "9" },
        { fileName: './images/n04553703_411.JPEG', id: "2" },
        { fileName: './images/n04554684_292.JPEG', id: "4" },
        { fileName: './images/n04560804_104.JPEG', id: "2" },
        { fileName: './images/n04606251_147.JPEG', id: "9" },
        { fileName: './images/n04612504_186.JPEG', id: "9" },
        { fileName: './images/n06794110_13.JPEG', id: "9" },        
    ],

    3:[
        { fileName: './images/n02666196_88.JPEG', id: "n02666196" },
        { fileName: './images/n02708093_14.JPEG', id: "n02708093" },
        { fileName: './images/n02749479_125.JPEG', id: "n02749479" },
        { fileName: './images/n02841315_250.JPEG', id: "n02841315" },
        { fileName: './images/n02948072_386.JPEG', id: "n02948072" },
        { fileName: './images/n02950826_650.JPEG', id: "n02950826" },
        { fileName: './images/n02977058_1158.JPEG', id: "n02977058" },
        { fileName: './images/n02977058_776.JPEG', id: "n02977058" },
        { fileName: './images/n03063689_24.JPEG', id: "n03063689" },
        { fileName: './images/n03196217_35.JPEG', id: "n03196217" },
        { fileName: './images/n03197337_193.JPEG', id: "n03197337" },
        { fileName: './images/n03271574_238.JPEG', id: "n03271574" },
        { fileName: './images/n03271574_572.JPEG', id: "n03271574" },
        { fileName: './images/n03425413_88.JPEG', id: "n03425413" },
        { fileName: './images/n03467068_92.JPEG', id: "n03467068" },
        { fileName: './images/n03483316_955.JPEG', id: "n03483316" },
        { fileName: './images/n03532672_506.JPEG', id: "n03532672" },
        { fileName: './images/n03544143_171.JPEG', id: "n03544143" },
        { fileName: './images/n03627232_730.JPEG', id: "n03627232" },
        { fileName: './images/n03657121_290.JPEG', id: "n03657121" },
        { fileName: './images/n03666591_1916.JPEG', id: "n03666591" },
        { fileName: './images/n03692522_283.JPEG', id: "n03692522" },
        { fileName: './images/n03706229_5.JPEG', id: "n03706229" },
        { fileName: './images/n03759954_179.JPEG', id: "n03759954" },
        { fileName: './images/n03794056_23.JPEG', id: "n03794056" },
        { fileName: './images/n03803284_518.JPEG', id: "n03803284" },
        { fileName: './images/n03868863_44.JPEG', id: "n03868863" },
        { fileName: './images/n03874293_503.JPEG', id: "n03874293" },
        { fileName: './images/n03876231_1382.JPEG', id: "n03876231" },
        { fileName: './images/n03967562_1908.JPEG', id: "n03967562" },
        { fileName: './images/n03992509_67.JPEG', id: "n03992509" },
        { fileName: './images/n04040759_148.JPEG', id: "n04040759" },
        { fileName: './images/n04040759_23.JPEG', id: "n04040759" },
        { fileName: './images/n04044716_101.JPEG', id: "n04044716" },
        { fileName: './images/n04069434_104.JPEG', id: "n04069434" },
        { fileName: './images/n04074963_224.JPEG', id: "n04074963" },
        { fileName: './images/n04243546_28.JPEG', id: "n04243546" },
        { fileName: './images/n04243546_610.JPEG', id: "n04243546" },
        { fileName: './images/n04258138_314.JPEG', id: "n04258138" },
        { fileName: './images/n04330267_533.JPEG', id: "n04330267" },
        { fileName: './images/n04355338_194.JPEG', id: "n04355338" },
        { fileName: './images/n04372370_1099.JPEG', id: "n04372370" },
        { fileName: './images/n04456115_959.JPEG', id: "n04456115" },
        { fileName: './images/n04485082_632.JPEG', id: "n04485082" },
        { fileName: './images/n04505470_250.JPEG', id: "n04505470" },
        { fileName: './images/n04505470_34.JPEG', id: "n04505470" },
        { fileName: './images/n04525305_121.JPEG', id: "n04525305" },
        { fileName: './images/n04525305_430.JPEG', id: "n04525305" },
        { fileName: './images/n04548280_189.JPEG', id: "n04548280" },
        { fileName: './images/n04548280_2.JPEG', id: "n04548280" },        
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