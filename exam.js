var Weight = /** @class */ (function () {
    function Weight(weights) {
        this.weights = weights;
    }
    return Weight;
}());
var Answer = /** @class */ (function () {
    function Answer(nomedoaluno, resultados) {
        this.resultados = resultados;
        this.nomedoaluno = nomedoaluno;
    }
    return Answer;
}());
var Exam = /** @class */ (function () {
    function Exam(answer, weight) {
        this.answer = answer;
        this.weight = weight;
        this.exams = [];
    }
    Exam.prototype.add = function (exams) {
        this.exams.push(exams);
    };
    Exam.prototype.avg = function () {
        var soma = 0;
        var count = 0;
        for (var i = 0; i < this.exams.length; i++) {
            for (var value in this.exams[i].resultados) {
                if (this.answer.resultados[value] === this.exams[i].resultados[value]) {
                    soma += this.weight.weights[value];
                    count++;
                }
            }
        }
        ;
        var avg = soma / count;
        console.log(avg);
        return avg;
    };
    Exam.prototype.min = function () {
        return [];
    };
    Exam.prototype.max = function () {
        return [];
    };
    Exam.prototype.lt = function () {
        return [];
    };
    Exam.prototype.gt = function () {
        return [];
    };
    return Exam;
}());
var peso = new Weight({ a: 4, b: 6 });
var gabarito = new Answer('professor', { a: 'a', b: 'b' });
var leticia = new Answer('leticia', { a: 'a', b: 'b' });
var susu = new Answer('susu', { a: 'a', b: 'b' });
var matematica = new Exam(gabarito, peso);
matematica.add(leticia);
matematica.add(susu);
