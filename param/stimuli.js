
// Likert量表选项
var likert_scale = [
    "完全不符合",
    "基本不符合",
    "一般/中度",
    "基本符合",
    "完全符合"
];

var pi20_questions = [
    { prompt: "1. 我的面孔识别能力比大多数人都要差。", name: 'Q1', labels: likert_scale, required: true },
    { prompt: "2. 我对面孔的记忆总是很糟糕。", name: 'Q2', labels: likert_scale, required: true },
    { prompt: "3. 我发现认出具有独特面部特征的人明显要更容易。", name: 'Q3', labels: likert_scale, required: true },
    { prompt: "4. 我经常把我以前见过的人误认为是陌生人。", name: 'Q4', labels: likert_scale, required: true },
    { prompt: "5. 当我在上学的时候，我很难认出我的同学。", name: 'Q5', labels: likert_scale, required: true },
    { prompt: "6. 当人们换发型，或者戴帽子的时候，我就很难再认出他们。", name: 'Q6', labels: likert_scale, required: true },
    { prompt: "7. 我有时不得不提醒刚认识的人，我识别面孔能力很差。", name: 'Q7', labels: likert_scale, required: true },
    { prompt: "8. 我觉得在脑海中想象出某个人的面孔很容易。", name: 'Q8', labels: likert_scale, required: true },
    { prompt: "9. 我比大多数人更擅长将一个人的名字与他的面孔相对应。", name: 'Q9', labels: likert_scale, required: true },
    { prompt: "10. 如果没有听到对方的声音，我就很难认出他们。", name: 'Q10', labels: likert_scale, required: true },
    { prompt: "11. 对面孔识别的焦虑已经导致我会有意避开某些社交和职业场合。", name: 'Q11', labels: likert_scale, required: true },
    { prompt: "12. 我必须比其他人更努力地去记忆面孔。", name: 'Q12', labels: likert_scale, required: true },
    { prompt: "13. 我对自己从照片中认出自己的能力非常有信心。", name: 'Q13', labels: likert_scale, required: true },
    { prompt: "14. 因为识别角色的困难，我有时会觉得很难跟上电影剧情。", name: 'Q14', labels: likert_scale, required: true },
    { prompt: "15. 我的朋友和家人都认为我的面孔识别或面孔记忆能力很差。", name: 'Q15', labels: likert_scale, required: true },
    { prompt: "16. 因为没有认出对方是谁，我经常觉得自己冒犯了别人。", name: 'Q16', labels: likert_scale, required: true },
    { prompt: "17. 在要求人们穿相同衣服（比如穿西装、制服或泳衣）的场合中，认人对我来说很容易。", name: 'Q17', labels: likert_scale, required: true },
    { prompt: "18. 在家庭聚会上，我有时会混淆某些家庭成员。", name: 'Q18', labels: likert_scale, required: true },
    { prompt: "19. 我觉得即使名人已经发生了很大的变化，我也很容易把他们从'成名前'的照片中认出来。", name: 'Q19', labels: likert_scale, required: true },
    { prompt: "20. 当我在陌生的场景遇到之前熟悉的人时，我很难认出他们（例如在购物时意外遇到一个同事）。", name: 'Q20', labels: likert_scale, required: true }
];