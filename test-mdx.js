const fs = require('fs');
const { compile } = require('@mdx-js/mdx');

async function testMDX() {
    const file = process.argv[2] || 'content/informatics/grade-12/bai-7.mdx';
    try {
        const content = fs.readFileSync(file, 'utf8');
        await compile(content, { jsx: true });
        console.log(`✅ ${file} COMPILED SUCCESSFULLY!`);
        process.exit(0);
    } catch (error) {
        console.log(`❌ ${file} COMPILATION ERROR:`);
        console.log(error.message);
        if (error.position) {
            console.log(`Line: ${error.position.start.line}, Column: ${error.position.start.column}`);
        }
        process.exit(1);
    }
}

testMDX();
