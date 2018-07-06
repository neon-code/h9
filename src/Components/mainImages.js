import React from 'react';
import '../CSS/primary.css';
import { Button, Image, Icon, Label, Header, Modal } from 'semantic-ui-react';

var fileDir = {
    1:[
        { fileName: './images/n01491361_172.JPEG', id: "n01491361" },
        { fileName: './images/n01632458_31.JPEG', id: "n01632458" },
        { fileName: './images/n01664065_281.JPEG', id: "n01664065" },
        { fileName: './images/n01770081_33.JPEG', id: "n01770081" },
        { fileName: './images/n01773797_9.JPEG', id: "n01773797" },
        { fileName: './images/n01817953_194.JPEG', id: "n01817953" },
        { fileName: './images/n02086079_140.JPEG', id: "n02086079" },
        { fileName: './images/n02089973_115.JPEG', id: "n02089973" },
        { fileName: './images/n02095570_114.JPEG', id: "n02095570" },
        { fileName: './images/n02097658_16.JPEG', id: "n02097658" },
        { fileName: './images/n02106662_382.JPEG', id: "n02106662" },
        { fileName: './images/n02110063_255.JPEG', id: "n02110063" },
        { fileName: './images/n02110958_51.JPEG', id: "n02110958" },
        { fileName: './images/n02111277_115.JPEG', id: "n02111277" },
        { fileName: './images/n02115641_39.JPEG', id: "n02115641" },
        { fileName: './images/n02123045_262.JPEG', id: "n02123045" },
        { fileName: './images/n02123394_125.JPEG', id: "n02123394" },
        { fileName: './images/n02127052_206.JPEG', id: "n02127052" },
        { fileName: './images/n02128385_158.JPEG', id: "n02128385" },
        { fileName: './images/n02128925_227.JPEG', id: "n02128925" },
        { fileName: './images/n02134084_197.JPEG', id: "n02134084" },
        { fileName: './images/n02169497_273.JPEG', id: "n02169497" },
        { fileName: './images/n02206856_112.JPEG', id: "n02206856" },
        { fileName: './images/n02233338_298.JPEG', id: "n02233338" },
        { fileName: './images/n02328150_210.JPEG', id: "n02328150" },
        { fileName: './images/n02398521_138.JPEG', id: "n02398521" },
        { fileName: './images/n02408429_147.JPEG', id: "n02408429" },
        { fileName: './images/n02480495_196.JPEG', id: "n02480495" },
        { fileName: './images/n02483708_80.JPEG', id: "n02483708" },
        { fileName: './images/n02486410_161.JPEG', id: "n02486410" },
        { fileName: './images/n02504458_26.JPEG', id: "n02504458" },
        { fileName: './images/n02667093_88.JPEG', id: "n02667093" },
        { fileName: './images/n02727426_743.JPEG', id: "n02727426" },
        { fileName: './images/n02814533_240.JPEG', id: "n02814533" },
        { fileName: './images/n02992529_344.JPEG', id: "n02992529" },
        { fileName: './images/n03047690_361.JPEG', id: "n03047690" },
        { fileName: './images/n03160309_1300.JPEG', id: "n03160309" },
        { fileName: './images/n03394916_1163.JPEG', id: "n03394916" },
        { fileName: './images/n03476991_488.JPEG', id: "n03476991" },
        { fileName: './images/n03496892_40.JPEG', id: "n03496892" },
        { fileName: './images/n03796401_323.JPEG', id: "n03796401" },
        { fileName: './images/n03866082_27.JPEG', id: "n03866082" },
        { fileName: './images/n03891251_19.JPEG', id: "n03891251" },
        { fileName: './images/n03982430_501.JPEG', id: "n03982430" },
        { fileName: './images/n07697313_132.JPEG', id: "n07697313" },
        { fileName: './images/n07749582_132.JPEG', id: "n07749582" },
        { fileName: './images/n07892512_457.JPEG', id: "n07892512" },
        { fileName: './images/n09421951_877.JPEG', id: "n09421951" },
        { fileName: './images/n11939491_1173.JPEG', id: "n11939491" },
        { fileName: './images/n12057211_147.JPEG', id: "n12057211" },
    ],

    2:[
        { fileName: './images/n02669723_102.JPEG', id: "8" },
        { fileName: './images/n02676566_77.JPEG', id: "6" },
        { fileName: './images/n02701002_114.JPEG', id: "9" },
        { fileName: './images/n02769748_242.JPEG', id: "2" },
        { fileName: './images/n02794156_55.JPEG', id: "5" },
        { fileName: './images/n02794156_82.JPEG', id: "5" },
        { fileName: './images/n02797295_144.JPEG', id: "9" },
        { fileName: './images/n02808304_309.JPEG', id: "8" },
        { fileName: './images/n02814860_444.JPEG', id: "0" },
        { fileName: './images/n02988304_306.JPEG', id: "1" },
        { fileName: './images/n03017168_922.JPEG', id: "6" },
        { fileName: './images/n03047690_268.JPEG', id: "8" },
        { fileName: './images/n03095699_107.JPEG', id: "9" },
        { fileName: './images/n03131574_29.JPEG', id: "4" },
        { fileName: './images/n03201208_91.JPEG', id: "4" },
        { fileName: './images/n03417042_176.JPEG', id: "9" },
        { fileName: './images/n03478589_3.JPEG', id: "9" },
        { fileName: './images/n03483316_407.JPEG', id: "3" },
        { fileName: './images/n03617480_289.JPEG', id: "8" },
        { fileName: './images/n03662601_373.JPEG', id: "9" },
        { fileName: './images/n03706229_20.JPEG', id: "3" },
        { fileName: './images/n03792782_104.JPEG', id: "9" },
        { fileName: './images/n03796401_158.JPEG', id: "9" },
        { fileName: './images/n03804744_450.JPEG', id: "5" },
        { fileName: './images/n03954731_390.JPEG', id: "5" },
        { fileName: './images/n03977966_1334.JPEG', id: "9" },
        { fileName: './images/n04009552_149.JPEG', id: "1" },
        { fileName: './images/n04041544_59.JPEG', id: "1" },
        { fileName: './images/n04099969_16.JPEG', id: "4" },
        { fileName: './images/n04179913_90.JPEG', id: "3" },
        { fileName: './images/n04252077_65.JPEG', id: "9" },
        { fileName: './images/n04266014_15.JPEG', id: "9" },
        { fileName: './images/n04285008_13.JPEG', id: "9" },
        { fileName: './images/n04328186_118.JPEG', id: "5" },
        { fileName: './images/n04370456_167.JPEG', id: "8" },
        { fileName: './images/n04482393_449.JPEG', id: "9" },
        { fileName: './images/n04483307_255.JPEG', id: "9" },
        { fileName: './images/n04487081_293.JPEG', id: "9" },
        { fileName: './images/n04505470_6.JPEG', id: "3" },
        { fileName: './images/n04536866_352.JPEG', id: "6" },
        { fileName: './images/n04548280_2.JPEG', id: "3" },
        { fileName: './images/n04550184_83.JPEG', id: "4" },
        { fileName: './images/n04552348_95.JPEG', id: "9" },
        { fileName: './images/n04553703_335.JPEG', id: "2" },
        { fileName: './images/n04554684_68.JPEG', id: "4" },
        { fileName: './images/n04560804_3.JPEG', id: "2" },
        { fileName: './images/n04592741_639.JPEG', id: "9" },
        { fileName: './images/n04606251_271.JPEG', id: "9" },
        { fileName: './images/n04612504_125.JPEG', id: "9" },
        { fileName: './images/n06794110_106.JPEG', id: "9" },
    ],

    3:[
        { fileName: './images/n02667093_111.JPEG', id: "n02667093" },
        { fileName: './images/n02667093_269.JPEG', id: "n02667093" },
        { fileName: './images/n02669723_198.JPEG', id: "n02669723" },
        { fileName: './images/n02669723_347.JPEG', id: "n02669723" },
        { fileName: './images/n02807133_138.JPEG', id: "n02807133" },
        { fileName: './images/n02807133_467.JPEG', id: "n02807133" },
        { fileName: './images/n02808304_172.JPEG', id: "n02808304" },
        { fileName: './images/n02808304_449.JPEG', id: "n02808304" },
        { fileName: './images/n02834397_13.JPEG', id: "n02834397" },
        { fileName: './images/n02837789_783.JPEG', id: "n02837789" },
        { fileName: './images/n02883205_169.JPEG', id: "n02883205" },
        { fileName: './images/n02883205_611.JPEG', id: "n02883205" },
        { fileName: './images/n02892767_737.JPEG', id: "n02892767" },
        { fileName: './images/n02916936_136.JPEG', id: "n02916936" },
        { fileName: './images/n02963159_12.JPEG', id: "n02963159" },
        { fileName: './images/n02963159_64.JPEG', id: "n02963159" },
        { fileName: './images/n03045698_160.JPEG', id: "n03045698" },
        { fileName: './images/n03047690_268.JPEG', id: "n03047690" },
        { fileName: './images/n03047690_361.JPEG', id: "n03047690" },
        { fileName: './images/n03124043_111.JPEG', id: "n03124043" },
        { fileName: './images/n03124043_246.JPEG', id: "n03124043" },
        { fileName: './images/n03124170_150.JPEG', id: "n03124170" },
        { fileName: './images/n03124170_327.JPEG', id: "n03124170" },
        { fileName: './images/n03188531_26.JPEG', id: "n03188531" },
        { fileName: './images/n03188531_8.JPEG', id: "n03188531" },
        { fileName: './images/n03325584_343.JPEG', id: "n03325584" },
        { fileName: './images/n03404251_150.JPEG', id: "n03404251" },
        { fileName: './images/n03404251_34.JPEG', id: "n03404251" },
        { fileName: './images/n03450230_613.JPEG', id: "n03450230" },
        { fileName: './images/n03450230_68.JPEG', id: "n03450230" },
        { fileName: './images/n03485794_1006.JPEG', id: "n03485794" },
        { fileName: './images/n03485794_1024.JPEG', id: "n03485794" },
        { fileName: './images/n03534580_557.JPEG', id: "n03534580" },
        { fileName: './images/n03594734_188.JPEG', id: "n03594734" },
        { fileName: './images/n03594734_579.JPEG', id: "n03594734" },
        { fileName: './images/n03595614_447.JPEG', id: "n03595614" },
        { fileName: './images/n03595614_576.JPEG', id: "n03595614" },
        { fileName: './images/n03617480_341.JPEG', id: "n03617480" },
        { fileName: './images/n03617480_457.JPEG', id: "n03617480" },
        { fileName: './images/n03630383_178.JPEG', id: "n03630383" },
        { fileName: './images/n03630383_76.JPEG', id: "n03630383" },
        { fileName: './images/n03676483_360.JPEG', id: "n03676483" },
        { fileName: './images/n03676483_596.JPEG', id: "n03676483" },
        { fileName: './images/n03680355_110.JPEG', id: "n03680355" },
        { fileName: './images/n03690938_31.JPEG', id: "n03690938" },
        { fileName: './images/n03690938_90.JPEG', id: "n03690938" },
        { fileName: './images/n03763968_154.JPEG', id: "n03763968" },
        { fileName: './images/n03763968_319.JPEG', id: "n03763968" },
        { fileName: './images/n03770439_517.JPEG', id: "n03770439" },
        { fileName: './images/n03770439_608.JPEG', id: "n03770439" },
    ]
}

var activeIndex = Math.floor(Math.random() * 50), usedImages = [activeIndex], taskDone = 1, flag;
var timeTaken = { minutes: 0, seconds: 0, milsec: 0 }, indvTime = [0, 0, 0], addTime = [0, 0, 0], avgTime = [], Interval;
var level = 1, fileName = fileDir[level][activeIndex].fileName, levelFlag = [ true, true ];
const LevelLimit = [5, 10, 15];

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