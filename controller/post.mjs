import * as postRepository from "../data/post.mjs";

// 모든 포스트를 가져오는 함수 / 해당 유저아이디에 대한 포스트를 가져오는 함수
export async function getPosts(req, res, next) {
  const userid = req.query.userid;
  const data = await (userid
    ? postRepository.getAllByUserid(userid)
    : postRepository.getAll());
  res.status(200).json(data);
}

// 글번호를 기준으로 하나의 포스트를 가져오는 함수
export async function getPost(req, res, next) {
  const id = req.params.id;
  const post = await postRepository.getById(id);
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json(`${id}번의 포스트가 없습니다.`);
  }
}

// 새로운 포스트 작성
export async function createPost(req, res, next) {
  const { userid, name, text } = req.body;
  const posts = await postRepository.create(userid, name, text);
  res.status(200).json(posts);
}

// 포스트 수정
export async function updatePost(req, res, next) {
  const id = req.params.id;
  const text = req.body.text;
  const update = await postRepository.update(id, text);
  if (update) {
    res.status(201).json(update);
  } else {
    res.status(404).json({ message: `${id}의 포스트가 없습니다.` });
  }
}

// 포스트 삭제
export async function removePost(req, res, next) {
  const id = req.params.id;
  const remove = await postRepository.remove(id);
  res.status(204).json(`${id}번 글이 삭제되었습니다.`);
}
