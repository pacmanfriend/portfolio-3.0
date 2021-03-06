import t600 from "@images/terminators/t-600.jpg";
import t800 from "@images/terminators/t-800.jpg";
import t850 from "@images/terminators/t-850.jpg";

let defaultItems = {
    terminators: [
        {
            name: 'T-600',
            height: '2.2 метра',
            weight: '800кг',
            speed: 'до 25км/ч',
            description: 'T-600 легко отличимы от людей, так как у них резиновая кожа, в отличие от более поздних. В основном применяются T-600, не облачённые в кожный покров, либо имеющие только перчатки и голову-маску. Представляют собой примитивный вариант андроида: помимо грубой имитации кожных покровов, они имеют неудачную громоздкую конструкцию высотой 2,2 метра. Принять их за человека можно лишь издалека (как, например, сделал Маркус Райт при столкновении с T-600 в Лос-Анджелесе). При движениях T-600 издаёт характерный звук движущихся металлических механизмов. Способность имитировать человеческую речь отсутствует.\n' +
                '\n' +
                'T-600 не способен выполнять второстепенные задачи или задачи, не связанные с первоочередной целью. Когда на территории центра SkyNET Джон Коннор открывал аппарели и заметил часового T-600, то спрятался внутри. T-600 проходил мимо и заметил торчащий из блока предохранителей провод, но не стал проверять происхождение нештатного провода.',
            photoUrl: t600
        },
        {
            name: 'T-800',
            height: '188см',
            weight: '180кг',
            speed: 'до 35км/ч',
            description: 'В основе Т-800 — каркас из титанового сплава, в общих чертах имитирующий скелет человека. Каркас неуязвим для стрелкового оружия, хотя может быть уничтожен нитроглицериновыми шашками. Так, в фильме "Терминатор" он выдержал 11 выстрелов из дробовика Кайла Риза, +1 в глаз, +1 в руку; взрыв у машины, аварию, расстрел из дробовика в погоне, аварию, расстрел в полицейском участке, столкновение с автопоездом, взрыв бензовоза, огонь. В фильме "Терминатор 2: Судный день" выдержал драки с Т-1000, расстрел полицией, а также был пробит насквозь стальной арматурой Т-1000. В фильме "Терминатор: Да придёт спаситель" Т-800 выдержал три выстрела из гранатомета Джона Коннора, несколько десятков выстрелов из огнестрельного оружия, падение на него нескольких тонн расплавленного метала (то, чего не выдержали Т-800 и Т-1000 в Т2), драку с Маркусом Райтом. В фильме "Терминатор: Тёмные судьбы" рука Т-800 выдержала кислотный душ, который не смог выдержать Т-1000.',
            photoUrl: t800
        },
        {
            name: 'T-850',
            height: '190см',
            weight: '320кг',
            speed: 'до 100км/ч',
            description: 'Усовершенствованная версия T-800, внешне не отличающаяся от него, но использующая иной источник энергии: два дублирующих друг друга водородных топливных элемента с возможностью доступа к ним и замены, рассчитанные на 200 лет работы. Из-за того, что люди захватили склады Скайнета с плазменным оружием, он предпринимает решение создать броню, которая неуязвима для плазмы. Поэтому T-X не смогла уничтожить новую модель полностью, а вывела его из строя на короткий промежуток времени. Также упрощена процедура удаления человеческой плоти с эндоскелета и возможность перезагрузки операционной системы, управляющей Терминатором. Кроме того, усилена прочность эндоскелета. Есть и другие, менее значительные изменения.',
            photoUrl: t850
        }
    ]
}

export const catalogReducer = (state = defaultItems, action) => {
    switch (action.type) {
        case "GET_ITEMS": {
            return {...state}
        }
        case"GET_ITEM": {
            return state.terminators.find(item => item.name === action.payload)
        }
        default:
            return state;
    }
}