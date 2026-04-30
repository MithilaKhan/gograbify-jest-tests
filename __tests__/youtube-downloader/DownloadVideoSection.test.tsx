import { render, screen } from "@testing-library/react"
import YoutubeVideoDownloader from "@/features/youtube-video-downloader"

test("check text", () => {
  render(<YoutubeVideoDownloader />)
  const textElement = screen.getByText("Follow these simple steps to download any YouTube video")
  expect(textElement).toBeInTheDocument()
})