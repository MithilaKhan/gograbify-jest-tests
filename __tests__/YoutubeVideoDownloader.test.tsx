import { render, screen } from "@testing-library/react"
import YoutubeVideoDownloader from "@/features/youtube-video-downloader"

test("check text", () => {
  render(<YoutubeVideoDownloader />)
  const textElement = screen.getByText("Follow these simple steps to download any YouTube video")
  expect(textElement).toBeInTheDocument()
})

test("Testing  input box", () => {
  render(<YoutubeVideoDownloader />)
  let checkInput = screen.getByRole("textbox")
  let checkPlaceHolder = screen.getByPlaceholderText("Paste video URL here...")
  expect(checkInput).toBeInTheDocument()
  expect(checkPlaceHolder).toBeInTheDocument()
  expect(checkInput).toHaveAttribute("type", "text")
  expect(checkInput).toHaveAttribute("id", "banner-input")
})