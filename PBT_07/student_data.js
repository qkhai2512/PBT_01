const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" }
];

let gioi = 0;
let kha = 0;
let trungBinh = 0;
let yeu = 0;

let maxStudent = null;
let minStudent = null;

let totalMath = 0;
let totalPhysics = 0;
let totalCs = 0;

console.log("STT | Tên | TB | Xếp loại");

students.forEach((student, index) => {

    const avg =
        student.math * 0.4 +
        student.physics * 0.3 +
        student.cs * 0.3;

    let rank;

    if (avg >= 8) {
        rank = "Giỏi";
        gioi++;
    } else if (avg >= 6.5) {
        rank = "Khá";
        kha++;
    } else if (avg >= 5) {
        rank = "Trung bình";
        trungBinh++;
    } else {
        rank = "Yếu";
        yeu++;
    }

    console.log(
        `${index + 1} | ${student.name} | ${avg.toFixed(1)} | ${rank}`
    );

    totalMath += student.math;
    totalPhysics += student.physics;
    totalCs += student.cs;

    if (!maxStudent || avg > maxStudent.avg) {
        maxStudent = {
            name: student.name,
            avg: avg
        };
    }

    if (!minStudent || avg < minStudent.avg) {
        minStudent = {
            name: student.name,
            avg: avg
        };
    }
});

console.log("\n===== THỐNG KÊ =====");

console.log("Giỏi:", gioi);
console.log("Khá:", kha);
console.log("Trung bình:", trungBinh);
console.log("Yếu:", yeu);

console.log("\nSinh viên cao nhất:");

console.log(
    maxStudent.name,
    maxStudent.avg.toFixed(1)
);

console.log("\nSinh viên thấp nhất:");

console.log(
    minStudent.name,
    minStudent.avg.toFixed(1)
);

console.log("\n===== TB MÔN HỌC =====");

console.log(
    "Math:",
    (totalMath / students.length).toFixed(2)
);

console.log(
    "Physics:",
    (totalPhysics / students.length).toFixed(2)
);

console.log(
    "CS:",
    (totalCs / students.length).toFixed(2)
);