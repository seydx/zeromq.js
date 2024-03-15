import {downloadZMQ} from "@seydx/zeromq-binaries"
import {resolve} from "path"
import {mkdirSync, rm} from "fs"

const prebuildPath = resolve(__dirname, "../prebuilds")

rm(prebuildPath, {recursive: true}, error => {
  if (error) {
    console.error("Error removing prebuilds directory:", error)
  }
})

mkdirSync(prebuildPath, {recursive: true})

downloadZMQ(prebuildPath)
  .then(() => {
    console.log("ZeroMQ prebuilds downloaded successfully.")
  })
  .catch(err => {
    console.error("Error downloading ZeroMQ prebuilds:", err)
  })
