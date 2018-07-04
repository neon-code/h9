import React from 'react';
import '../CSS/primary.css';
import { Button, Image, Icon, Label, Header, Modal } from 'semantic-ui-react';

var fileDir = {
    1:[
        { fileName: './images/n01440764_200.JPEG', id: "n01440764" },
        { fileName: './images/n01443537_395.JPEG', id: "n01443537" },
        { fileName: './images/n01514859_7354.JPEG', id: "n01514859" },
        { fileName: './images/n01630670_5783.JPEG', id: "n01630670" },
        { fileName: './images/n01698640_1347.JPEG', id: "n01698640" },
        { fileName: './images/n01735189_2055.JPEG', id: "n01735189" },
        { fileName: './images/n01807496_5601.JPEG', id: "n01807496" },
        { fileName: './images/n01943899_3373.JPEG', id: "n01943899" },
        { fileName: './images/n02002724_5061.JPEG', id: "n02002724" },
        { fileName: './images/n02051845_22.JPEG', id: "n02051845" },
        { fileName: './images/n02090721_4797.JPEG', id: "n02090721" },
        { fileName: './images/n02097047_489.JPEG', id: "n02097047" },
        { fileName: './images/n02105505_50.JPEG', id: "n02105505" },
        { fileName: './images/n02106382_6712.JPEG', id: "n02106382" },
        { fileName: './images/n02108089_2692.JPEG', id: "n02108089" },
        { fileName: './images/n02113799_620.JPEG', id: "n02113799" },
        { fileName: './images/n02129604_25925.JPEG', id: "n02129604" },
        { fileName: './images/n02236044_531.JPEG', id: "n02236044" },
        { fileName: './images/n02361337_9336.JPEG', id: "n02361337" },
        { fileName: './images/n02480495_5066.JPEG', id: "n02480495" },
        { fileName: './images/n02676566_8828.JPEG', id: "n02676566" },
        { fileName: './images/n02804414_2613.JPEG', id: "n02804414" },
        { fileName: './images/n02894605_96227.JPEG', id: "n02894605" },
        { fileName: './images/n02978881_6195.JPEG', id: "n02978881" },
        { fileName: './images/n03047690_15783.JPEG', id: "n03047690" },
        { fileName: './images/n03207941_8246.JPEG', id: "n03207941" },
        { fileName: './images/n03388043_9982.JPEG', id: "n03388043" },
        { fileName: './images/n03457902_29328.JPEG', id: "n03457902" },
        { fileName: './images/n03532672_11889.JPEG', id: "n03532672" },
        { fileName: './images/n03657121_13633.JPEG', id: "n03657121" },
        { fileName: './images/n03729826_14776.JPEG', id: "n03729826" },
        { fileName: './images/n03804744_9637.JPEG', id: "n03804744" },
        { fileName: './images/n03887697_5360.JPEG', id: "n03887697" },
        { fileName: './images/n03902125_5312.JPEG', id: "n03902125" },
        { fileName: './images/n03970156_4209.JPEG', id: "n03970156" },
        { fileName: './images/n04040759_13649.JPEG', id: "n04040759" },
        { fileName: './images/n04116512_11727.JPEG', id: "n04116512" },
        { fileName: './images/n04179913_10375.JPEG', id: "n04179913" },
        { fileName: './images/n04270147_8090.JPEG', id: "n04270147" },
        { fileName: './images/n04371774_14384.JPEG', id: "n04371774" },
        { fileName: './images/n04417672_8665.JPEG', id: "n04417672" },
        { fileName: './images/n04487394_9598.JPEG', id: "n04487394" },
        { fileName: './images/n04542943_2429.JPEG', id: "n04542943" },
        { fileName: './images/n07590611_6298.JPEG', id: "n07590611" },
        { fileName: './images/n07716906_2804.JPEG', id: "n07716906" },
        { fileName: './images/n07753275_7848.JPEG', id: "n07753275" },
        { fileName: './images/n07802026_6480.JPEG', id: "n07802026" },
        { fileName: './images/n09472597_33589.JPEG', id: "n09472597" },
        { fileName: './images/n13044778_739.JPEG', id: "n13044778" },
        { fileName: './images/n15075141_9000.JPEG', id: "n15075141" }
    ],

    2:[
        { fileName: './images/n01443537_339.JPEG', id: "0" },
        { fileName: './images/n01491361_264.JPEG', id: "0" },
        { fileName: './images/n01514668_80.JPEG', id: "1" },
        { fileName: './images/n01558993_155.JPEG', id: "1" },
        { fileName: './images/n01614925_52.JPEG', id: "1" },
        { fileName: './images/n01644900_267.JPEG', id: "8" },
        { fileName: './images/n01669191_985.JPEG', id: "8" },
        { fileName: './images/n01749939_189.JPEG', id: "8" },
        { fileName: './images/n01773549_156.JPEG', id: "5" },
        { fileName: './images/n01806143_43.JPEG', id: "1" },
        { fileName: './images/n01820546_114.JPEG', id: "1" },
        { fileName: './images/n01871265_114.JPEG', id: "7" },
        { fileName: './images/n01873310_2647.JPEG', id: "7" },
        { fileName: './images/n01877812_446.JPEG', id: "7" },
        { fileName: './images/n01944390_5.JPEG', id: "5" },
        { fileName: './images/n01978455_65.JPEG', id: "1" },
        { fileName: './images/n01983481_3041.JPEG', id: "1" },
        { fileName: './images/n02013706_70.JPEG', id: "1" },
        { fileName: './images/n02033041_336.JPEG', id: "1" },
        { fileName: './images/n02085620_157.JPEG', id: "3" },
        { fileName: './images/n02086646_23.JPEG', id: "3" },
        { fileName: './images/n02090379_13.JPEG', id: "3" },
        { fileName: './images/n02090721_142.JPEG', id: "3" },
        { fileName: './images/n02091635_215.JPEG', id: "3" },
        { fileName: './images/n02094258_125.JPEG', id: "3" },
        { fileName: './images/n02098105_4.JPEG', id: "3" },
        { fileName: './images/n02101556_159.JPEG', id: "3" },
        { fileName: './images/n02105505_43.JPEG', id: "3" },
        { fileName: './images/n02108422_104.JPEG', id: "3" },
        { fileName: './images/n02113799_18.JPEG', id: "3" },
        { fileName: './images/n02115641_108.JPEG', id: "3" },
        { fileName: './images/n02119789_122.JPEG', id: "2" },
        { fileName: './images/n02123045_93.JPEG', id: "7" },
        { fileName: './images/n02123597_2.JPEG', id: "7" },
        { fileName: './images/n02125311_52.JPEG', id: "2" },
        { fileName: './images/n02128385_114.JPEG', id: "2" },
        { fileName: './images/n02129165_345.JPEG', id: "2" },
        { fileName: './images/n02132136_16.JPEG', id: "2" },
        { fileName: './images/n02134418_17.JPEG', id: "2" },
        { fileName: './images/n02138441_58.JPEG', id: "7" },
        { fileName: './images/n02165105_193.JPEG', id: "5" },
        { fileName: './images/n02169497_7.JPEG', id: "5" },
        { fileName: './images/n02233338_47.JPEG', id: "5" },
        { fileName: './images/n02280649_115.JPEG', id: "5" },
        { fileName: './images/n02317335_42.JPEG', id: "9" },
        { fileName: './images/n02325366_4.JPEG', id: "7" },
        { fileName: './images/n02346627_277.JPEG', id: "6" },
        { fileName: './images/n02389026_36.JPEG', id: "4" },
        { fileName: './images/n02395406_108.JPEG', id: "4" },
        { fileName: './images/n02481823_11.JPEG', id: "6" },
    ],

    3:[
        { fileName: './images/n02085620_288.JPEG', id: "n02085620" },
        { fileName: './images/n02086646_4485.JPEG', id: "n02086646" },
        { fileName: './images/n02086910_8790.JPEG', id: "n02086910" },
        { fileName: './images/n02087046_18458.JPEG', id: "n02087046" },
        { fileName: './images/n02087394_9990.JPEG', id: "n02087394" },
        { fileName: './images/n02088094_6494.JPEG', id: "n02088094" },
        { fileName: './images/n02088238_4298.JPEG', id: "n02088238" },
        { fileName: './images/n02088466_9696.JPEG', id: "n02088466" },
        { fileName: './images/n02088632_2615.JPEG', id: "n02088632" },
        { fileName: './images/n02089078_4441.JPEG', id: "n02089078" },
        { fileName: './images/n02091032_2583.JPEG', id: "n02091032" },
        { fileName: './images/n02093428_3286.JPEG', id: "n02093428" },
        { fileName: './images/n02093754_2834.JPEG', id: "n02093754" },
        { fileName: './images/n02093859_3848.JPEG', id: "n02093859" },
        { fileName: './images/n02097047_3755.JPEG', id: "n02097047" },
        { fileName: './images/n02097130_6056.JPEG', id: "n02097130" },
        { fileName: './images/n02097209_7313.JPEG', id: "n02097209" },
        { fileName: './images/n02097298_12041.JPEG', id: "n02097298" },
        { fileName: './images/n02097474_10485.JPEG', id: "n02097474" },
        { fileName: './images/n02097658_7162.JPEG', id: "n02097658" },
        { fileName: './images/n02098105_4260.JPEG', id: "n02098105" },
        { fileName: './images/n02098286_4568.JPEG', id: "n02098286" },
        { fileName: './images/n02098413_119.JPEG', id: "n02098413" },
        { fileName: './images/n02099267_2707.JPEG', id: "n02099267" },
        { fileName: './images/n02099429_3768.JPEG', id: "n02099429" },
        { fileName: './images/n02099601_7873.JPEG', id: "n02099601" },
        { fileName: './images/n02100877_9560.JPEG', id: "n02100877" },
        { fileName: './images/n02101388_13498.JPEG', id: "n02101388" },
        { fileName: './images/n02101556_7442.JPEG', id: "n02101556" },
        { fileName: './images/n02102040_3114.JPEG', id: "n02102040" },
        { fileName: './images/n02102177_5594.JPEG', id: "n02102177" },
        { fileName: './images/n02107908_9.JPEG', id: "n02107908" },
        { fileName: './images/n02108000_7068.JPEG', id: "n02108000" },
        { fileName: './images/n02108089_9724.JPEG', id: "n02108089" },
        { fileName: './images/n02108422_2679.JPEG', id: "n02108422" },
        { fileName: './images/n02108551_7290.JPEG', id: "n02108551" },
        { fileName: './images/n02108915_3426.JPEG', id: "n02108915" },
        { fileName: './images/n02109047_9103.JPEG', id: "n02109047" },
        { fileName: './images/n02109525_21208.JPEG', id: "n02109525" },
        { fileName: './images/n02109961_22628.JPEG', id: "n02109961" },
        { fileName: './images/n02110063_7850.JPEG', id: "n02110063" },
        { fileName: './images/n02110185_12775.JPEG', id: "n02110185" },
        { fileName: './images/n02110341_10375.JPEG', id: "n02110341" },
        { fileName: './images/n02110627_13211.JPEG', id: "n02110627" },
        { fileName: './images/n02110806_15653.JPEG', id: "n02110806" },
        { fileName: './images/n02110958_10.JPEG', id: "n02110958" },
        { fileName: './images/n02111129_850.JPEG', id: "n02111129" },
        { fileName: './images/n02111277_104.JPEG', id: "n02111277" },
        { fileName: './images/n02111889_100.JPEG', id: "n02111889" },
        { fileName: './images/n02112018_67.JPEG', id: "n02112018" },
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