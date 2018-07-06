import React from 'react';
import '../CSS/primary.css';
import { Button, Image, Icon, Label, Header, Modal } from 'semantic-ui-react';

var fileDir = {
    1:[
        { fileName: './images/n01560419_13.JPEG', id: "n01560419" },
        { fileName: './images/n01616318_115.JPEG', id: "n01616318" },
        { fileName: './images/n01664065_281.JPEG', id: "n01664065" },
        { fileName: './images/n01950731_316.JPEG', id: "n01950731" },
        { fileName: './images/n01984695_840.JPEG', id: "n01984695" },
        { fileName: './images/n02085782_130.JPEG', id: "n02085782" },
        { fileName: './images/n02092002_51.JPEG', id: "n02092002" },
        { fileName: './images/n02097047_128.JPEG', id: "n02097047" },
        { fileName: './images/n02097298_78.JPEG', id: "n02097298" },
        { fileName: './images/n02097474_46.JPEG', id: "n02097474" },
        { fileName: './images/n02097658_16.JPEG', id: "n02097658" },
        { fileName: './images/n02105162_119.JPEG', id: "n02105162" },
        { fileName: './images/n02106662_382.JPEG', id: "n02106662" },
        { fileName: './images/n02110627_279.JPEG', id: "n02110627" },
        { fileName: './images/n02113799_2.JPEG', id: "n02113799" },
        { fileName: './images/n02123045_147.JPEG', id: "n02123045" },
        { fileName: './images/n02123159_31.JPEG', id: "n02123159" },
        { fileName: './images/n02123597_207.JPEG', id: "n02123597" },
        { fileName: './images/n02128757_34.JPEG', id: "n02128757" },
        { fileName: './images/n02134084_6.JPEG', id: "n02134084" },
        { fileName: './images/n02169497_214.JPEG', id: "n02169497" },
        { fileName: './images/n02177972_17.JPEG', id: "n02177972" },
        { fileName: './images/n02226429_115.JPEG', id: "n02226429" },
        { fileName: './images/n02279972_461.JPEG', id: "n02279972" },
        { fileName: './images/n02395406_433.JPEG', id: "n02395406" },
        { fileName: './images/n02398521_138.JPEG', id: "n02398521" },
        { fileName: './images/n02410509_78.JPEG', id: "n02410509" },
        { fileName: './images/n02454379_62.JPEG', id: "n02454379" },
        { fileName: './images/n02480855_94.JPEG', id: "n02480855" },
        { fileName: './images/n02494079_7.JPEG', id: "n02494079" },
        { fileName: './images/n02690373_102.JPEG', id: "n02690373" },
        { fileName: './images/n02782093_124.JPEG', id: "n02782093" },
        { fileName: './images/n02786058_9.JPEG', id: "n02786058" },
        { fileName: './images/n02948072_9.JPEG', id: "n02948072" },
        { fileName: './images/n03018349_71.JPEG', id: "n03018349" },
        { fileName: './images/n03197337_243.JPEG', id: "n03197337" },
        { fileName: './images/n03344393_318.JPEG', id: "n03344393" },
        { fileName: './images/n03376595_157.JPEG', id: "n03376595" },
        { fileName: './images/n03424325_233.JPEG', id: "n03424325" },
        { fileName: './images/n03444034_40.JPEG', id: "n03444034" },
        { fileName: './images/n03792782_52.JPEG', id: "n03792782" },
        { fileName: './images/n03843555_188.JPEG', id: "n03843555" },
        { fileName: './images/n03877472_865.JPEG', id: "n03877472" },
        { fileName: './images/n03920288_61.JPEG', id: "n03920288" },
        { fileName: './images/n07248320_359.JPEG', id: "n07248320" },
        { fileName: './images/n10565667_41.JPEG', id: "n10565667" },
        { fileName: './images/n11939491_1187.JPEG', id: "n11939491" },
        { fileName: './images/n12267677_600.JPEG', id: "n12267677" },
        { fileName: './images/n12985857_14.JPEG', id: "n12985857" },
        { fileName: './images/n13040303_68.JPEG', id: "n13040303" },
    ],

    2:[
        { fileName: './images/n01443537_354.JPEG', id: "0" },
        { fileName: './images/n01484850_76.JPEG', id: "0" },
        { fileName: './images/n01514668_631.JPEG', id: "1" },
        { fileName: './images/n01518878_109.JPEG', id: "1" },
        { fileName: './images/n01531178_278.JPEG', id: "1" },
        { fileName: './images/n01532829_122.JPEG', id: "1" },
        { fileName: './images/n01560419_4.JPEG', id: "1" },
        { fileName: './images/n01630670_81.JPEG', id: "8" },
        { fileName: './images/n01644373_83.JPEG', id: "8" },
        { fileName: './images/n01664065_385.JPEG', id: "8" },
        { fileName: './images/n01669191_33.JPEG', id: "8" },
        { fileName: './images/n01697457_121.JPEG', id: "8" },
        { fileName: './images/n01742172_42.JPEG', id: "8" },
        { fileName: './images/n01773549_102.JPEG', id: "5" },
        { fileName: './images/n01807496_26.JPEG', id: "1" },
        { fileName: './images/n01855032_80.JPEG', id: "1" },
        { fileName: './images/n01877812_115.JPEG', id: "7" },
        { fileName: './images/n01924916_197.JPEG', id: "9" },
        { fileName: './images/n01944390_5.JPEG', id: "8" },
        { fileName: './images/n01981276_573.JPEG', id: "0" },
        { fileName: './images/n02007558_37.JPEG', id: "1" },
        { fileName: './images/n02074367_28.JPEG', id: "0" },
        { fileName: './images/n02085620_242.JPEG', id: "3" },
        { fileName: './images/n02087046_66.JPEG', id: "3" },
        { fileName: './images/n02089078_111.JPEG', id: "3" },
        { fileName: './images/n02091032_20.JPEG', id: "3" },
        { fileName: './images/n02091244_101.JPEG', id: "3" },
        { fileName: './images/n02093859_61.JPEG', id: "3" },
        { fileName: './images/n02094433_63.JPEG', id: "3" },
        { fileName: './images/n02097209_52.JPEG', id: "3" },
        { fileName: './images/n02098105_50.JPEG', id: "3" },
        { fileName: './images/n02105641_188.JPEG', id: "3" },
        { fileName: './images/n02106550_61.JPEG', id: "3" },
        { fileName: './images/n02109047_232.JPEG', id: "3" },
        { fileName: './images/n02119789_746.JPEG', id: "2" },
        { fileName: './images/n02123045_147.JPEG', id: "7" },
        { fileName: './images/n02206856_71.JPEG', id: "5" },
        { fileName: './images/n02229544_59.JPEG', id: "5" },
        { fileName: './images/n02276258_8.JPEG', id: "5" },
        { fileName: './images/n02279972_233.JPEG', id: "5" },
        { fileName: './images/n02346627_75.JPEG', id: "7" },
        { fileName: './images/n02389026_183.JPEG', id: "4" },
        { fileName: './images/n02391049_18.JPEG', id: "4" },
        { fileName: './images/n02397096_28.JPEG', id: "4" },
        { fileName: './images/n02403003_33.JPEG', id: "4" },
        { fileName: './images/n02410509_20.JPEG', id: "4" },
        { fileName: './images/n02422699_106.JPEG', id: "4" },
        { fileName: './images/n02442845_159.JPEG', id: "7" },
        { fileName: './images/n02447366_61.JPEG', id: "7" },
        { fileName: './images/n02480855_129.JPEG', id: "6" },
    ],

    3:[
        { fileName: './images/n01773157_182.JPEG', id: "n01773157" },
        { fileName: './images/n01773157_76.JPEG', id: "n01773157" },
        { fileName: './images/n01773549_15.JPEG', id: "n01773549" },
        { fileName: './images/n01773797_201.JPEG', id: "n01773797" },
        { fileName: './images/n01773797_67.JPEG', id: "n01773797" },
        { fileName: './images/n01774750_17.JPEG', id: "n01774750" },
        { fileName: './images/n01774750_27.JPEG', id: "n01774750" },
        { fileName: './images/n01775062_39.JPEG', id: "n01775062" },
        { fileName: './images/n01776313_134.JPEG', id: "n01776313" },
        { fileName: './images/n01784675_81.JPEG', id: "n01784675" },
        { fileName: './images/n02165456_1036.JPEG', id: "n02165456" },
        { fileName: './images/n02165456_943.JPEG', id: "n02165456" },
        { fileName: './images/n02167151_147.JPEG', id: "n02167151" },
        { fileName: './images/n02168699_105.JPEG', id: "n02168699" },
        { fileName: './images/n02169497_36.JPEG', id: "n02169497" },
        { fileName: './images/n02172182_149.JPEG', id: "n02172182" },
        { fileName: './images/n02174001_130.JPEG', id: "n02174001" },
        { fileName: './images/n02174001_34.JPEG', id: "n02174001" },
        { fileName: './images/n02177972_2.JPEG', id: "n02177972" },
        { fileName: './images/n02190166_160.JPEG', id: "n02190166" },
        { fileName: './images/n02190166_37.JPEG', id: "n02190166" },
        { fileName: './images/n02206856_132.JPEG', id: "n02206856" },
        { fileName: './images/n02206856_71.JPEG', id: "n02206856" },
        { fileName: './images/n02206856_847.JPEG', id: "n02206856" },
        { fileName: './images/n02219486_4494.JPEG', id: "n02219486" },
        { fileName: './images/n02219486_715.JPEG', id: "n02219486" },
        { fileName: './images/n02226429_294.JPEG', id: "n02226429" },
        { fileName: './images/n02226429_341.JPEG', id: "n02226429" },
        { fileName: './images/n02229544_1176.JPEG', id: "n02229544" },
        { fileName: './images/n02229544_438.JPEG', id: "n02229544" },
        { fileName: './images/n02231487_614.JPEG', id: "n02231487" },
        { fileName: './images/n02231487_7.JPEG', id: "n02231487" },
        { fileName: './images/n02233338_47.JPEG', id: "n02233338" },
        { fileName: './images/n02233338_55.JPEG', id: "n02233338" },
        { fileName: './images/n02236044_232.JPEG', id: "n02236044" },
        { fileName: './images/n02236044_367.JPEG', id: "n02236044" },
        { fileName: './images/n02256656_69.JPEG', id: "n02256656" },
        { fileName: './images/n02259212_221.JPEG', id: "n02259212" },
        { fileName: './images/n02259212_37.JPEG', id: "n02259212" },
        { fileName: './images/n02264363_383.JPEG', id: "n02264363" },
        { fileName: './images/n02268443_50.JPEG', id: "n02268443" },
        { fileName: './images/n02268853_63.JPEG', id: "n02268853" },
        { fileName: './images/n02276258_105.JPEG', id: "n02276258" },
        { fileName: './images/n02276258_366.JPEG', id: "n02276258" },
        { fileName: './images/n02277742_57.JPEG', id: "n02277742" },
        { fileName: './images/n02279972_40.JPEG', id: "n02279972" },
        { fileName: './images/n02279972_461.JPEG', id: "n02279972" },
        { fileName: './images/n02280649_115.JPEG', id: "n02280649" },
        { fileName: './images/n02281406_401.JPEG', id: "n02281406" },
        { fileName: './images/n02281787_47.JPEG', id: "n02281787" },
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