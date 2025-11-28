const fs = require("fs")
const path = require("path")

const src = path.join(__dirname, "src")
const dest = path.join(__dirname, "public")

function cleanDir(dir) {
    if (fs.existsSync(dir)) {
        fs.rmSync(dir, { recursive: true, force: true })
    }
    fs.mkdirSync(dir, { recursive: true })
}

function copyRecursive(srcDir, destDir) {
    const items = fs.readdirSync(srcDir, { withFileTypes: true })
    for (const it of items) {
        const s = path.join(srcDir, it.name)
        const d = path.join(destDir, it.name)
        if (it.isDirectory()) {
            fs.mkdirSync(d, { recursive: true })
            copyRecursive(s, d)
        } else {
            fs.copyFileSync(s, d)
        }
    }
}

cleanDir(dest)

copyRecursive(src, dest)

console.log("Copied src -> public")
