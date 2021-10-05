// 吸ったタバコの本数によってデメリットに表示する文言を動的に変える関数
export const changeText = (cigarettes: number | string): string => {
    switch (true) {
        case cigarettes > 33: {
            return "喫煙者は、非喫煙者と比べて不眠症の率が4~5倍に跳ね上がる。";
        }
        case cigarettes > 30: {
            return "ニコチンの持続時間は30~40分程度。";
        }
        case cigarettes > 27: {
            return "喫煙者は普段から集中力が大幅に低下。";
        }
        case cigarettes > 24: {
            return "男性の場合は、全てのがん死亡の約3割は喫煙に起因すると考えられている。";
        }
        case cigarettes > 21: {
            return "喫煙者は、非喫煙者と比べて10年ほど寿命が短くなる。";
        }
        case cigarettes > 18: {
            return "メンタルにも悪い。うつ病リスクが3倍、自殺率で1.3倍~2倍となる。";
        }
        case cigarettes > 15: {
            return "日本では、受動喫煙が原因で、1.5万人が死亡している。";
        }
        case cigarettes > 12: {
            return "日本では、喫煙が原因で年間12~13万人が死亡する。";
        }
        case cigarettes > 9: {
            return "ほとんどのがんのリスクが増加する。咽頭がんで5.5倍、肺がんで4.8倍、肝臓がんで3.1倍となる";
        }
        case cigarettes > 6: {
            return "寝る前の一服は、寝る前にコーヒーを飲むのと同じことである。";
        }
        case cigarettes > 3: {
            return "喫煙者の入眠時間は、非喫煙者と比べて、平均で15分遅くなる。";
        }
        default: {
            return "10年禁煙すると、今までのタバコの健康へのマイナス効果を無くすことができる。";
        }
    }
};
