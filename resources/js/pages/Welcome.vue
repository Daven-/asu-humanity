<template>
    <div class="container">
        <div class="row">
            <div class="sketchfab-embed-wrapper"><iframe width="412" height="414" src="https://sketchfab.com/models/2c253fb457d54d908c161aa503547b1d/embed?autostart=1"
                    frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

                <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #eee;">
                    <a href="https://sketchfab.com/models/2c253fb457d54d908c161aa503547b1d?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
                        target="_blank" style="font-weight: bold; color: #eee;">Highland cow</a>
                    by <a href="https://sketchfab.com/flumba?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
                        target="_blank" style="font-weight: bold; color: #eee;">Juuso Mattila</a>
                    on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
                        target="_blank" style="font-weight: bold; color: #eee;">Sketchfab</a>
                </p>
            </div>
        </div>

        <div class="row" v-for="(category, index) in categories" :key="index">
            <div class="col mt-3 pr-0">
                <button class="cool-btn btn-block btn-lg pt-4 pb-4" @click.prevent="goHere(category.link)">
                    {{ category.mainButtonText }}
                </button>
            </div>
            <div class="col-3 mt-3 pl-1">
                <button class="cool-btn btn-block btn-lg pt-4 pb-4" @click.prevent="speak(category.speechKey)">
                    <i class="fas fa-volume-up fa-lg"></i>
                </button>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <!-- <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?q=literacy%20resources&key=AIzaSyBjk6cw9sr8BZMOyEhuqqQLAkVBboRdZd8" allowfullscreen></iframe> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
            return {
                categories: [
                    {
                        mainButtonText: 'A B C',
                        speechKey: 'abc',
                        link: '/#/abc'
                    },
                    {
                        mainButtonText: 'Phonics',
                        speechKey: 'phonics',
                        link: '/#/phonics'
                    },
                    {
                        mainButtonText: 'Words',
                        speechKey: 'words',
                        link: '/#/words'
                    },
                    {
                        mainButtonText: 'Sentences',
                        speechKey: 'sentences',
                        link: '/#/sentences'
                    },
                    {
                        mainButtonText: 'Karaoke',
                        speechKey: 'karaoke',
                        link: '/#/karaoke'
                    },
                    {
                        mainButtonText: 'Resources',
                        speechKey: 'resources',
                        link: '/#/resources'
                    }
                ]
            }
        },
    methods: {
        goHere (link) {
            window.location.href = link;
        },
        resources () {
            window.location.href = "/#/resources";
        },
        speak (key) {
            let text = '';
            switch (key) {
                case 'abc':
                    text = "ABC's";
                    break;
                case 'phonics':
                    text = "Learn how to sound out words.";
                    break;
                case 'words':
                    text = "Learn to read full words.";
                    break;
                case 'sentences':
                    text = "Learn to read full sentences.";
                    break;
                case 'karaoke':
                    text = "Learning through karaoke.";
                    break;
                default:
                    text = "noth"
                    break;
            }
            var msg = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(msg);
        }
    }
}
</script>
