const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const prisma = new PrismaClient();

async function main() {
  const raw = fs.readFileSync('./questions.json', 'utf-8');
  const questions = JSON.parse(raw);

  await prisma.question.deleteMany();

  for (const q of questions) {
    await prisma.question.create({
      data: {
        text: q.text,
        mbti: q.mbti
      }
    });
  }

  console.log("✅ Seeded MBTI questions only.");
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
