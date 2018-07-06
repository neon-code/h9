import React from 'react';
import '../CSS/primary.css';
import { Button, Image, Icon, Label, Header, Modal } from 'semantic-ui-react';

var fileDir = {
    1:[
        { fileName: './images/n01616318_115.JPEG', id: "n01616318" },
        { fileName: './images/n01641577_57.JPEG', id: "n01641577" },
        { fileName: './images/n01748264_249.JPEG', id: "n01748264" },
        { fileName: './images/n01944390_54.JPEG', id: "n01944390" },
        { fileName: './images/n01984695_1012.JPEG', id: "n01984695" },
        { fileName: './images/n02012849_62.JPEG', id: "n02012849" },
        { fileName: './images/n02087394_46.JPEG', id: "n02087394" },
        { fileName: './images/n02092002_228.JPEG', id: "n02092002" },
        { fileName: './images/n02097130_163.JPEG', id: "n02097130" },
        { fileName: './images/n02097658_16.JPEG', id: "n02097658" },
        { fileName: './images/n02102040_107.JPEG', id: "n02102040" },
        { fileName: './images/n02107574_43.JPEG', id: "n02107574" },
        { fileName: './images/n02110063_49.JPEG', id: "n02110063" },
        { fileName: './images/n02110627_951.JPEG', id: "n02110627" },
        { fileName: './images/n02115641_216.JPEG', id: "n02115641" },
        { fileName: './images/n02120505_284.JPEG', id: "n02120505" },
        { fileName: './images/n02123045_34.JPEG', id: "n02123045" },
        { fileName: './images/n02128385_17.JPEG', id: "n02128385" },
        { fileName: './images/n02128757_217.JPEG', id: "n02128757" },
        { fileName: './images/n02129604_165.JPEG', id: "n02129604" },
        { fileName: './images/n02167151_87.JPEG', id: "n02167151" },
        { fileName: './images/n02226429_409.JPEG', id: "n02226429" },
        { fileName: './images/n02268443_1306.JPEG', id: "n02268443" },
        { fileName: './images/n02328150_97.JPEG', id: "n02328150" },
        { fileName: './images/n02395406_108.JPEG', id: "n02395406" },
        { fileName: './images/n02410509_87.JPEG', id: "n02410509" },
        { fileName: './images/n02441942_277.JPEG', id: "n02441942" },
        { fileName: './images/n02480495_261.JPEG', id: "n02480495" },
        { fileName: './images/n02486261_108.JPEG', id: "n02486261" },
        { fileName: './images/n02500267_59.JPEG', id: "n02500267" },
        { fileName: './images/n02607072_6.JPEG', id: "n02607072" },
        { fileName: './images/n02690373_290.JPEG', id: "n02690373" },
        { fileName: './images/n02727426_743.JPEG', id: "n02727426" },
        { fileName: './images/n02782093_124.JPEG', id: "n02782093" },
        { fileName: './images/n02791124_65.JPEG', id: "n02791124" },
        { fileName: './images/n02817516_407.JPEG', id: "n02817516" },
        { fileName: './images/n02974003_17.JPEG', id: "n02974003" },
        { fileName: './images/n03018349_192.JPEG', id: "n03018349" },
        { fileName: './images/n03100240_189.JPEG', id: "n03100240" },
        { fileName: './images/n03197337_4.JPEG', id: "n03197337" },
        { fileName: './images/n03787032_135.JPEG', id: "n03787032" },
        { fileName: './images/n03838899_3.JPEG', id: "n03838899" },
        { fileName: './images/n03891251_15.JPEG', id: "n03891251" },
        { fileName: './images/n03933933_36.JPEG', id: "n03933933" },
        { fileName: './images/n07749582_81.JPEG', id: "n07749582" },
        { fileName: './images/n07871810_210.JPEG', id: "n07871810" },
        { fileName: './images/n09288635_146.JPEG', id: "n09288635" },
        { fileName: './images/n09421951_68.JPEG', id: "n09421951" },
        { fileName: './images/n12267677_27.JPEG', id: "n12267677" },
        { fileName: './images/n12620546_279.JPEG', id: "n12620546" },
    ],

    2:[
        { fileName: './images/n02747177_118.JPEG', id: "2" },
        { fileName: './images/n02769748_242.JPEG', id: "2" },
        { fileName: './images/n02782093_35.JPEG', id: "9" },
        { fileName: './images/n02788148_293.JPEG', id: "0" },
        { fileName: './images/n02794156_51.JPEG', id: "5" },
        { fileName: './images/n02804610_70.JPEG', id: "6" },
        { fileName: './images/n02808440_410.JPEG', id: "2" },
        { fileName: './images/n02814533_126.JPEG', id: "9" },
        { fileName: './images/n02814860_178.JPEG', id: "0" },
        { fileName: './images/n02815834_67.JPEG', id: "2" },
        { fileName: './images/n02825657_48.JPEG', id: "0" },
        { fileName: './images/n02835271_158.JPEG', id: "9" },
        { fileName: './images/n02843684_180.JPEG', id: "0" },
        { fileName: './images/n02865351_858.JPEG', id: "8" },
        { fileName: './images/n02871525_919.JPEG', id: "0" },
        { fileName: './images/n02883205_429.JPEG', id: "8" },
        { fileName: './images/n02906734_609.JPEG', id: "5" },
        { fileName: './images/n02910353_440.JPEG', id: "8" },
        { fileName: './images/n02917067_75.JPEG', id: "9" },
        { fileName: './images/n02980441_218.JPEG', id: "0" },
        { fileName: './images/n03026506_98.JPEG', id: "8" },
        { fileName: './images/n03041632_120.JPEG', id: "5" },
        { fileName: './images/n03045698_160.JPEG', id: "8" },
        { fileName: './images/n03063599_96.JPEG', id: "2" },
        { fileName: './images/n03075370_387.JPEG', id: "5" },
        { fileName: './images/n03089624_1045.JPEG', id: "0" },
        { fileName: './images/n03095699_485.JPEG', id: "9" },
        { fileName: './images/n03100240_40.JPEG', id: "9" },
        { fileName: './images/n03109150_1230.JPEG', id: "5" },
        { fileName: './images/n03110669_104.JPEG', id: "6" },
        { fileName: './images/n03124170_271.JPEG', id: "8" },
        { fileName: './images/n03126707_321.JPEG', id: "3" },
        { fileName: './images/n03127747_156.JPEG', id: "7" },
        { fileName: './images/n03127925_367.JPEG', id: "2" },
        { fileName: './images/n03141823_623.JPEG', id: "5" },
        { fileName: './images/n03179701_520.JPEG', id: "1" },
        { fileName: './images/n03197337_105.JPEG', id: "37" },
        { fileName: './images/n03201208_91.JPEG', id: "4" },
        { fileName: './images/n03207743_221.JPEG', id: "8" },
        { fileName: './images/n03240683_315.JPEG', id: "0" },
        { fileName: './images/n03271574_943.JPEG', id: "3" },
        { fileName: './images/n03272010_6.JPEG', id: "6" },
        { fileName: './images/n03272562_64.JPEG', id: "9" },
        { fileName: './images/n03290653_138.JPEG', id: "4" },
        { fileName: './images/n03337140_1367.JPEG', id: "4" },
        { fileName: './images/n03347037_626.JPEG', id: "4" },
        { fileName: './images/n03384352_44.JPEG', id: "9" },
        { fileName: './images/n03388549_233.JPEG', id: "4" },
        { fileName: './images/n03400231_685.JPEG', id: "5" },
        { fileName: './images/n03443371_327.JPEG', id: "2" },
    ],

    3:[
        { fileName: './images/n01629819_138.JPEG', id: "n01629819" },
        { fileName: './images/n01629819_362.JPEG', id: "n01629819" },
        { fileName: './images/n01630670_89.JPEG', id: "n01630670" },
        { fileName: './images/n01631663_192.JPEG', id: "n01631663" },
        { fileName: './images/n01632458_59.JPEG', id: "n01632458" },
        { fileName: './images/n01641577_150.JPEG', id: "n01641577" },
        { fileName: './images/n01644373_270.JPEG', id: "n01644373" },
        { fileName: './images/n01644900_148.JPEG', id: "n01644900" },
        { fileName: './images/n01644900_267.JPEG', id: "n01644900" },
        { fileName: './images/n01667114_684.JPEG', id: "n01667114" },
        { fileName: './images/n01667114_692.JPEG', id: "n01667114" },
        { fileName: './images/n01667114_73.JPEG', id: "n01667114" },
        { fileName: './images/n01667778_35.JPEG', id: "n01667778" },
        { fileName: './images/n01669191_105.JPEG', id: "n01669191" },
        { fileName: './images/n01675722_7.JPEG', id: "n01675722" },
        { fileName: './images/n01677366_1675.JPEG', id: "n01677366" },
        { fileName: './images/n01677366_243.JPEG', id: "n01677366" },
        { fileName: './images/n01677366_879.JPEG', id: "n01677366" },
        { fileName: './images/n01682714_317.JPEG', id: "n01682714" },
        { fileName: './images/n01685808_190.JPEG', id: "n01685808" },
        { fileName: './images/n01687978_325.JPEG', id: "n01687978" },
        { fileName: './images/n01687978_71.JPEG', id: "n01687978" },
        { fileName: './images/n01688243_225.JPEG', id: "n01688243" },
        { fileName: './images/n01688243_23.JPEG', id: "n01688243" },
        { fileName: './images/n01689811_214.JPEG', id: "n01689811" },
        { fileName: './images/n01692333_154.JPEG', id: "n01692333" },
        { fileName: './images/n01693334_143.JPEG', id: "n01693334" },
        { fileName: './images/n01693334_251.JPEG', id: "n01693334" },
        { fileName: './images/n01694178_12.JPEG', id: "n01694178" },
        { fileName: './images/n01695060_334.JPEG', id: "n01695060" },
        { fileName: './images/n01697457_118.JPEG', id: "n01697457" },
        { fileName: './images/n01697457_512.JPEG', id: "n01697457" },
        { fileName: './images/n01698640_254.JPEG', id: "n01698640" },
        { fileName: './images/n01728572_402.JPEG', id: "n01728572" },
        { fileName: './images/n01728920_158.JPEG', id: "n01728920" },
        { fileName: './images/n01729322_407.JPEG', id: "n01729322" },
        { fileName: './images/n01729977_400.JPEG', id: "n01729977" },
        { fileName: './images/n01734418_109.JPEG', id: "n01734418" },
        { fileName: './images/n01734418_356.JPEG', id: "n01734418" },
        { fileName: './images/n01735189_46.JPEG', id: "n01735189" },
        { fileName: './images/n01737021_589.JPEG', id: "n01737021" },
        { fileName: './images/n01739381_305.JPEG', id: "n01739381" },
        { fileName: './images/n01740131_161.JPEG', id: "n01740131" },
        { fileName: './images/n01742172_42.JPEG', id: "n01742172" },
        { fileName: './images/n01744401_148.JPEG', id: "n01744401" },
        { fileName: './images/n01748264_23.JPEG', id: "n01748264" },
        { fileName: './images/n01748264_452.JPEG', id: "n01748264" },
        { fileName: './images/n01749939_189.JPEG', id: "n01749939" },
        { fileName: './images/n01751748_47.JPEG', id: "n01751748" },
        { fileName: './images/n01756291_309.JPEG', id: "n01756291" },
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