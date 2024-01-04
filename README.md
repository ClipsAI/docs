# ClipsAI

<!-- [![PyPI version](https://badge.fury.io/py/project-name.svg)](https://badge.fury.io/py/project-name) -->
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Quickstart

Clips AI is an open-source Python library that automatically converts long videos into
clips. With just a few lines of code, you can segment a video into multiple clips and
resize its aspect ratio from 16:9 to 9:16.

> **Note:** Clips AI is designed for audio-centric, narrative-based videos such as
podcasts, interviews, speeches, and sermons. It actively employs video transcripts to
identify and create clips. Our resizing algorithm dynamically reframes and focuses on
the current speaker, converting the video into various aspect ratios.

For full documentation, visit [Clips AI Documentation](https://docs.clipsai.com/)

### Installation

```bash
pip install clipsai
```

```bash
pip install whisperx@git+https://github.com/m-bain/whisperx.git
```

## Creating clips

Clips are created based on the transcript of a video. You'll first need to transcribe
the video, and then you can create clips based on the transcript.
[WhisperX](https://github.com/m-bain/whisperX) is utilized under the hood to transcribe
videos.

```python
from clipsai import clip, transcribe

transcripiton = transcribe("video.mp4")
clips = clip(transcripiton)

print("StartTime: ", clips[0].start_time)
print("EndTime: ", clips[0].end_time)
```

## Resizing a video

You'll need to create an access token on hugging face to resize a video because 
[Pyannote](https://github.com/pyannote/pyannote-audio) is utilized for speaker 
diarization. You won't be charged for using Pyannote and instructions are on the
[Pyannote HuggingFace ](https://huggingface.co/pyannote/speaker-diarization-3.0) page.

```python
from clipsai import resize

crops = resize(
    video_file_path="video.mp4",
    pyannote_auth_token="pyannote_token",
    aspect_ratio=(9, 16)
)

print("Crops: ", crops.segments)
```