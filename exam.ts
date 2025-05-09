class Weight {
    weights: object;

    constructor (weights: object) {
        this.weights = weights;
    }
}

class Answer {
    resultados: object;
    nomedoaluno: string;

    constructor (nomedoaluno: string, resultados:object) {
        this.resultados = resultados
        this.nomedoaluno = nomedoaluno
    }
}

class Exam {
    private weight: Weight;
    private answer: Answer;
    private exams: Answer[];

    constructor (answer:Answer, weight: Weight) {
        this.answer = answer;
        this.weight = weight;
        this.exams = [];
    }

    public add(exams:Answer):void {
        this.exams.push(exams);
        console.log(exams);
    }

    public avg():number{
        let soma = 0;
        let count = 0;
        for (let i = 0; i < this.exams.length; i++) {
            count++;
            for (const value in this.exams[i].resultados) {
                if (this.answer.resultados[value] === this.exams[i].resultados[value]) {
                    soma += this.weight.weights[value];
                    
            }
            
        }
        
    };
    let avg:number = soma / count;
    console.log('Avg: ' + avg);
    return avg;
    }

    public min(count:number):Array<number>{
    let mediasabaixo: Array<number> = [];
    let mediaindividual = 0;
    for (let i = 0; i < this.exams.length; i++) {
        mediaindividual = 0;
        for (const value in this.exams[i].resultados) {
            if (this.answer.resultados[value] === this.exams[i].resultados[value]) {
                mediaindividual += this.weight.weights[value];
                if (mediaindividual === count) {
                mediasabaixo.push(mediaindividual);
        
            }}}}
    console.log('Min: ' + mediasabaixo+' -> todas as notas exatamente iguais a 5.');
    return mediasabaixo;
    }
    

    public max(count:number):Array<number> {
        let mediasacima: Array<number> = [];
        let mediaindividual = 0;
        for (let i = 0; i < this.exams.length; i++) {
            mediaindividual = 0;
            for (const value in this.exams[i].resultados) {
                if (this.answer.resultados[value] === this.exams[i].resultados[value]) {
                    mediaindividual += this.weight.weights[value];
                    if (mediaindividual > count) {
                    mediasacima.push(mediaindividual);
            
                }}}}
        console.log('Max: '+mediasacima+ ' -> todas as notas estritamente maiores que 5.');
        return mediasacima;
    }

   public lt(limit:number):Array<number> {
    let mediasabaixo: Array<number> = [];
    let mediaindividual;
    for (let i = 0; i < this.exams.length; i++) {
        mediaindividual = 0;
        for (const value in this.exams[i].resultados) {
            if (this.answer.resultados[value] === this.exams[i].resultados[value]) {
                mediaindividual += this.weight.weights[value]
        
            }}
            if (mediaindividual < limit) {
                mediasabaixo.push(mediaindividual);
            
        
        
    }}
    console.log('Lt: ' + mediasabaixo+' -> todas as notas abaixo de 5.');
    return mediasabaixo;
    }

    public gt(limit:number):Array<number> {
        let mediasacima: Array<number> = [];
        let mediaindividual = 0;
        for (let i = 0; i < this.exams.length; i++) {
            mediaindividual = 0;
            for (const value in this.exams[i].resultados) {
                if (this.answer.resultados[value] === this.exams[i].resultados[value]) {
                    mediaindividual += this.weight.weights[value];
                    if (mediaindividual >= limit) {
                    mediasacima.push(mediaindividual);
            
                }}}}
        console.log('Gt: '+mediasacima+ ' -> todas as notas maiores ou iguais a 5.');
        return mediasacima;
    }

}

const peso = new Weight({1:4, 2:6});
const gabarito = new Answer('professor',{1:'a', 2:'b'})
const leticia = new Answer('leticia',{1:'a', 2:'c'})
const suetone = new Answer('suetone',{1:'a', 2:'b'})
const laila = new Answer('laila',{1:'d', 2:'e'})
const pedro = new Answer('laila',{1:'a', 2:'b'})

const matematica  = new Exam(gabarito, peso)

matematica.add(leticia);
matematica.add(suetone);
matematica.add(laila);
matematica.add(pedro);


matematica.avg();
matematica.min(5);
matematica.max(5);
matematica.lt(5);
matematica.gt(5);