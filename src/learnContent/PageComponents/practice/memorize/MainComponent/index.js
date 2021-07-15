import React, { useContext, useState, useEffect } from "react";
import { connect } from "react-redux";
import Button from "../../../../elements/Button";
import AudioPlayer from "../../../../elements/AudioPlayer";
import useRecorder from "../../../../elements/useRecorder";
import RecordButton from "../../../../elements/RecordButton";
import classNames from "classnames";

import Image from "../../../../elements/Image";

import {
  setProgress,
  setPracticeFinished,
} from "../../../../reducers/PracticeState";

function PracticeMemorize({ practiceData, setProgress, setPracticeFinished }) {
  const [count, setCount] = useState(0);

  const [repeat, setRepeat] = useState(false);
  const [allowNext, setAllowNext] = useState(false);
  const [currentAudio, setCurrentAudio] = useState();
  const [text, setText] = useState("");

  useEffect(() => {
    if (repeat) setRepeat(false), setAllowNext(false);
  }, [repeat]);

  useEffect(() => {
    if (practiceData.length === 0 || undefined) return;

    if (practiceData.length !== 0 && practiceData.length === count) {
      setPracticeFinished(true);
      return;
    }

    setProgress(Math.floor(95 / (practiceData.length - count)));
    setCurrentAudio(practiceData[count].audio);
    setText(practiceData[count].text);
  }, [practiceData, count]);

  const handleNext = () => {
    setCount((prev) => prev + 1);
    // setProgress(true);
    setRepeat(true);
  };

  return (
    <section className='fl-ce p-64'>
      <div
        className='card fl-co fl-ju-co-sp-be'
        style={{ padding: "20px 25px 30px", minWidth: 472, height: 300 }}
      >
        <div className='fl fl-ju-co-en' style={{ color: "grey" }}>
          <span>{text}</span>
          <AudioPlayer
            setAudio={currentAudio}
            icon={require("../../../../assets/images/icons/speaker_icon.svg")}
          >
            <span
              className='ml-32'
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <Image
                type='icon'
                onClick={() => setRepeat(true)}
                image='speaker_icon.svg'
                // width={31}
              />
            </span>
          </AudioPlayer>
        </div>
        <RecordButton
          repeat={repeat}
          joinAudio={currentAudio}
          onAudioEnd={() => setAllowNext(true)}
        />
        <div className='fl fl-ju-co-sp-be'>
          <Image
            type='icon'
            onClick={() => setRepeat(true)}
            image='repeat_icon.svg'
          />
          <Button
            className={classNames(!allowNext && "disabled")}
            onClick={handleNext}
            disabled={!allowNext}
            style={{
              padding: 8,
              background: "#00c6c2",
              borderRadius: "50em",
            }}
          >
            <span>
              <Image
                type='icon'
                onClick={() => setRepeat(true)}
                image='right_icon.svg'
                width={25}
              />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}

const mapState = (state) => ({
  practiceData: state.PracticeState.practiceData,
});

const mapDis = (dispach) => ({
  setProgress: (enable) => dispach(setProgress(enable)),
  setPracticeFinished: (enable) => dispach(setPracticeFinished(enable)),
});

export default connect(mapState, mapDis)(PracticeMemorize);